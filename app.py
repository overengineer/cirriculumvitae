#!/usr/bin/python3
from flask import Flask, request, redirect
from flask import Markup, render_template
import flask
import re
import json
import unicodedata
from glob import glob
import os
import urllib.request
from datetime import datetime
from utils import *
from colorthief import ColorThief

app = Flask(__name__)


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


@app.route('/')
def root():
    return redirect('/edit')


@app.route('/edit', methods=['GET', 'POST'])
def resume():
    error = ""
    theme = "#468F99"
    autocolor = False
    with open('./virtual/resume.json') as f:
        default = json.load(f)
    if request.method == 'GET':
        cv = default
    else:
        try:
            cv = json.loads(request.form.get('data'))
        except:
            error = "Invalid JSON data!"
            print(error)
            cv = default
        try:
            theme = request.form.get('color')
            autocolor = bool(request.form.get('autocolor'))
            if autocolor:
                urllib.request.urlretrieve(
                    cv["image"], "temp")
                color_thief = ColorThief("temp")
                color = color_thief.get_color()
                color = normalize_brightness(color)
                theme = rgb2hex(color)
        except Exception as e:
            error = "auto-color failed"
            print(error+" : \n"+str(e))
            theme = "#468F99"
    pretty = json.dumps(cv, indent=4)
    return render_template('editor/edit.html', json=pretty, error=error, message="", theme=theme, autocolor=autocolor, **cv)


'''
    query = glob("templates/macros/*.html")
    macros = [os.path.splitext(os.path.basename(path))[
        0] for path in query]
    sections = [{"title": section["title"], "macro": section["macro"]}
                for section in cv["left"]+cv["right"]]
'''


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
