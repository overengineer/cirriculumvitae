#!/usr/bin/python3
from flask import Flask, request, redirect
from flask import Markup, render_template
import flask
import re
import json
import unicodedata
from datetime import datetime
from utils import *

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
    with open('./virtual/resume.json') as f:
        default = json.load(f)

    if request.method == 'GET':
        cv = default
    else:
        try:
            cv = json.loads(request.form.get('data'))
        except:
            error = "Invalid JSON data!"
            cv = default
    pretty = json.dumps(cv, indent=4)
    return render_template('edit.html', json=pretty, error=error, message="", **cv)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
