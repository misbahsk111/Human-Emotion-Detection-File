from flask import Flask, render_template, request
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)
analyzer = SentimentIntensityAnalyzer()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    text = request.form["user_text"]
    score = analyzer.polarity_scores(text)

    if score['compound'] >= 0.05:
        emotion = "Positive"
    elif score['compound'] <= -0.05:
        emotion = "Negative"
    else:
        emotion = "Neutral"

    return render_template("result.html", text=text, emotion=emotion, score=score['compound'])

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/wellness")
def wellness():
    return render_template("wellness.html")

@app.route("/webcam")
def webcam():
    return render_template("webcam.html")

# ✅ Naya Result route (sample data ke liye)
@app.route("/result")
def result():
    return render_template("result.html", text="Hello Students", emotion="Happy", score="92%")

if __name__ == "__main__":
    app.run(debug=True)
