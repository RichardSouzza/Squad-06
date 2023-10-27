from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/verification-2FT")
def verification2FT():
    return render_template("verificacao-2FT.html")


@app.route("/verify-cellphone")
def verify_cellphone():
    return render_template("verificacao-celular.html")


@app.route("/verify-email")
def verify_email():
    return render_template("verificacao-email.html")


@app.route("/client")
def client():
    return render_template("contribuinte.html")


@app.route("/client/dam")
def dam():
    return render_template("dam.html")
