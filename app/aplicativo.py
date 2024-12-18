from flask import Flask, request, jsonify, render_template
from textblob import TextBlob
import os

from modelos.modelo import classify_sentiment, preprocess_text

app = Flask(__name__, template_folder=os.path.join(os.path.dirname(__file__), '../template'))

def analyze_sentiment(text):
    clean_text = preprocess_text(text)
    if not clean_text:
        return {"score": None, "classification": "Texto Inválido"}

    blob = TextBlob(clean_text)
    polarity = blob.sentiment.polarity
    classification = classify_sentiment(polarity)
    
    return {"score": polarity, "classification": classification}


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_text = data.get('input')

    if not input_text:
        return jsonify({"error": "No input provided"}), 400

    sentiment = analyze_sentiment(input_text)

    prediction = {
        "Sentimento identificado": sentiment["classification"],
        "Polaridade": sentiment["score"]
    }
    return jsonify(prediction)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predictSite', methods=['POST'])
def predict_form():
    input_text = request.form.get('input_text')

    if not input_text:
        return render_template('index.html', error="Insira um texto válido!")

    sentiment = analyze_sentiment(input_text)

    result = {
        "Sentimento identificado": sentiment["classification"],
        "Polaridade": sentiment["score"]
    }
    return render_template('index.html', prediction=result)


if __name__ == '__main__':
    app.run(debug=True)
