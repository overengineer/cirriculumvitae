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


@app.route('/')
def root():
    return redirect('/cv')


@app.route('/cv')
def resume():
    with open('./virtual/resume.json') as f:
        cv = json.load(f)
    return render_template('resume.html', **cv)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
