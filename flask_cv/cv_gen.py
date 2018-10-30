# coding=UTF8
import json
from flask import Flask, render_template


app=Flask(__name__)

@app.route('/')
def home():
    with open('data.json',encoding='utf8') as data_file:
        data = json.load(data_file)
    return render_template('cv.html',data=data, getid = lambda x : "skill_level_"+str(id(x)))

@app.route('/pdf/')
def pdf():
    with open('data.json',encoding='utf8') as data_file:
        data = json.load(data_file)
    return data

if __name__ == "__main__":
    app.run(debug=True)
