#!/usr/bin/python3
import re
import os
import unicodedata
import binascii
from datetime import datetime


def valid_pin(pin):
    assert pin == "1982"
    return pin


def valid_name(name):
    name = name.strip()
    assert re.match(r"^((?![0-9_])[\w ])+$", name) != None
    return name


def valid_amount(amount):
    if isinstance(amount, str):
        amount = amount.strip()
        assert re.match("^[0-9]+$", amount) != None
        try:
            amount = int(amount)
        except:
            raise AssertionError
    assert amount > 0
    return amount


def get_month():
    aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs",
             "Haziran", "Temmuz", "Ağustos", "Eyül", "Ekim",
             "Kasım", "Aralık"]
    return str(aylar[datetime.now().month-1])


def get_total(records):
    total = dict()
    for month, record in records.items():
        s = 0
        for key, value in record.items():
            s += int(value["amount"])
        total[month] = s
        total["all"] = sum(total.values())
    return total


def get_summary(records, people):
    summary = dict()
    for month, record in records.items():
        for key, value in record.items():
            try:
                summary[value["name"]
                        ] += int(value["amount"])
            except:
                summary[value["name"]] = int(value["amount"])
    for person in people:
        name = str(person)
        if not name in summary:
            summary[name] = 0
    return summary


def asciify(s):
    return unicodedata.normalize('NFKD', s).encode('ascii', 'ignore')


def generate_key():
    return binascii.hexlify(os.urandom(64)).decode('utf-8')
