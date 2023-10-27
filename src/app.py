from flask import Flask, render_template


app = Flask(__name__,
            template_folder="client/dist",
            static_folder="client/dist",
            static_url_path="")


@app.route("/")
def login():
    return render_template("index.html")


@app.route("/client")
def client():
    return render_template("index.html")


# @app.route("/client/dam")
# def dam():
#     return render_template("dam.html")
