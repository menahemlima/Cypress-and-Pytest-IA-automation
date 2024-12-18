import pytest
import pandas as pd
import os
from textblob import TextBlob
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
)
import re

test_results = []

def preprocess_text(text):    
    text = re.sub(r"http\S+|www.\S+", "", text)
    text = re.sub(r"[^a-zA-Z0-9\s]", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

def classify_sentiment(text):
    clean_text = preprocess_text(text)
    analysis = TextBlob(clean_text)
    score = analysis.sentiment.polarity

    if score > 0.5:
        return "Very Positive"
    elif 0 < score <= 0.5:
        return "Slightly Positive"
    elif score == 0:
        return "Neutral"
    elif -0.5 <= score < 0:
        return "Slightly Negative"
    else:
        return "Very Negative"

@pytest.fixture
def datasetPrevisoes():
    base_path = os.path.dirname(__file__)
    dataset_path = os.path.join(base_path, "dataset", "two_words_1000.csv")
    dataset = pd.read_csv(dataset_path)
    
    registro = "text"
    categoria = "label"
    
    dataset["prediction"] = dataset[registro].apply(classify_sentiment)
    
    categorias = dataset[categoria]
    registros = dataset["prediction"]
    
    return categorias, registros

def test_accuracy(datasetPrevisoes):
    categorias, registros = datasetPrevisoes
    acuracia = accuracy_score(categorias, registros)
    print(f"\nAcurácia: {acuracia:.2f}")
    assert round(acuracia, 2) >= 0.7, f"Acurácia esperada >= 0.7, mas foi {acuracia:.2f}"

def test_precision(datasetPrevisoes):
    categorias, registros = datasetPrevisoes
    precisao = precision_score(categorias, registros, average="weighted", zero_division=0)
    print(f"\nPrecisão: {precisao:.2f}")
    assert round(precisao, 2) >= 0.7, f"Precisão esperada >= 0.7, mas foi {precisao:.2f}"

def test_recall(datasetPrevisoes):
    categorias, registros = datasetPrevisoes
    recall = recall_score(categorias, registros, average="weighted", zero_division=0)
    print(f"\nRecall: {recall:.2f}")
    assert round(recall, 2) >= 0.7, f"Recall esperado >= 0.7, mas foi {recall:.2f}"

def test_f1_score(datasetPrevisoes):
    categorias, registros = datasetPrevisoes
    f1 = f1_score(categorias, registros, average="weighted", zero_division=0)
    print(f"\nF1-Score: {f1:.2f}")
    assert round(f1, 2) >= 0.7, f"F1-score esperado >= 0.7, mas foi {f1:.2f}"

def test_confusion_matrix(datasetPrevisoes):
    categorias, registros = datasetPrevisoes
    labels_possible = ["Very Positive", "Slightly Positive", "Neutral", "Slightly Negative", "Very Negative"]
    cm = confusion_matrix(categorias, registros, labels=labels_possible)
    print("\nMatriz de Confusão:")
    print(cm)
    assert cm.sum() > 0, "Matriz de confusão vazia ou não foi gerada corretamente!"