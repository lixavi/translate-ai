# translateai/utils.py

import json

def load_json(file_path):
    """
    Loads JSON data from a file.

    Args:
    - file_path (str): Path to the JSON file.

    Returns:
    - dict: Loaded JSON data.
    """
    with open(file_path, 'r') as f:
        data = json.load(f)
    return data

def save_json(data, file_path):
    """
    Saves JSON data to a file.

    Args:
    - data (dict): JSON data to be saved.
    - file_path (str): Path to the JSON file.
    """
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

def tokenize_text(text):
    """
    Tokenizes a given text.

    Args:
    - text (str): Input text to be tokenized.

    Returns:
    - list: List of tokens.
    """
    # Implement your tokenization logic here
    tokens = text.split()  # Simple tokenization by splitting on whitespace
    return tokens

def detokenize_text(tokens):
    """
    Detokenizes a list of tokens into text.

    Args:
    - tokens (list): List of tokens.

    Returns:
    - str: Detokenized text.
    """
    # Implement your detokenization logic here
    text = ' '.join(tokens)  # Simple detokenization by joining tokens with whitespace
    return text
