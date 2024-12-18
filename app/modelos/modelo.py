import re

def classify_sentiment(score):
    if score > 0.5:
        return "Muito Positivo"
    elif 0 < score <= 0.5:
        return "Levemente Positivo"
    elif score == 0:
        return "Neutro"
    elif -0.5 <= score < 0:
        return "Levemente Negativo"
    else:
        return "Muito Negativo"

def preprocess_text(text):    
    text = re.sub(r"http\S+|www.\S+", "", text)
    text = re.sub(r"[^a-zA-Z0-9\s]", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text
