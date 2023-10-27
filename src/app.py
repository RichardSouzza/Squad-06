from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/client")
def client():
    return render_template("contribuinte.html")


@app.route("/client/dam")
def dam():
    return render_template("dam.html")
