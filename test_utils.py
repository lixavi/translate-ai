import unittest
import torch
from translateai.utils import load_json, save_json, tokenize_text, detokenize_text

class TestUtils(unittest.TestCase):
    def setUp(self):
        self.json_data = {'key1': 'value1', 'key2': [1, 2, 3], 'key3': {'nested_key': 'nested_value'}}
        self.json_file = 'test_data.json'
        self.text = "This is a test sentence."
        self.tokens = ['This', 'is', 'a', 'test', 'sentence', '.']

    def tearDown(self):
        try:
            os.remove(self.json_file)
        except FileNotFoundError:
            pass

    def test_load_json(self):
        with open(self.json_file, 'w') as f:
            json.dump(self.json_data, f)
        loaded_data = load_json(self.json_file)
        self.assertEqual(loaded_data, self.json_data)

    def test_save_json(self):
        save_json(self.json_data, self.json_file)
        with open(self.json_file, 'r') as f:
            saved_data = json.load(f)
        self.assertEqual(saved_data, self.json_data)

    def test_tokenize_text(self):
        tokens = tokenize_text(self.text)
        self.assertEqual(tokens, self.tokens)

    def test_detokenize_text(self):
        detokenized_text = detokenize_text(self.tokens)
        self.assertEqual(detokenized_text, self.text)

if __name__ == '__main__':
    unittest.main()
