from flask import Flask


app = Flask(__name__)


@app.route("/")
def index():
    return "Trivia Game Backend"


if __name__ == "__main__":
    app.run(debug=True)
