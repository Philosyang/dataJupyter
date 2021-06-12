from flask import Flask, json, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    ans = jsonify("Home")
    ans.headers.add('Access-Control-Allow-Origin', '*')
    return ans

@app.route('/test')
def test2():  # name doesn't matter much
    return jsonify("testtest")

