#!/usr/bin/python3
import re
import os
import unicodedata
import colorsys


def rgb2hex(color):
    return '#%02x%02x%02x' % color


def normalize_brightness(rgb, s=0.9, v=0.65):
    r, g, b = rgb
    hsv = [*colorsys.rgb_to_hsv(r/255, g/255, b/255)]
    hsv = hsv[0], s, v
    r, g, b = colorsys.hsv_to_rgb(*hsv)
    return int(r*255), int(g*255), int(b*255)


def asciify(s):
    return unicodedata.normalize('NFKD', s).encode('ascii', 'ignore')
