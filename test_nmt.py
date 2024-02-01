import unittest
import torch
from translateai.nmt import NMTModel, Encoder, Decoder, Attention

class TestNMT(unittest.TestCase):
    def setUp(self):
        self.input_size = 10
        self.output_size = 10
        self.hidden_size = 8
        self.batch_size = 4
        self.max_length = 5
        self.num_layers = 2

    def test_nmt_model(self):
        encoder = Encoder(self.input_size, self.hidden_size)
        decoder = Decoder(self.output_size, self.hidden_size, Attention('general'))
        model = NMTModel(encoder, decoder)
        source = torch.randint(0, self.input_size, (self.batch_size, self.max_length))
        target = torch.randint(0, self.output_size, (self.batch_size, self.max_length))
        source_lengths = torch.randint(1, self.max_length+1, (self.batch_size,))
        target_lengths = torch.randint(1, self.max_length+1, (self.batch_size,))
        output, attn_weights = model(source, target, source_lengths, target_lengths)
        self.assertEqual(output.size(), (self.batch_size, self.max_length, self.output_size))
        self.assertEqual(attn_weights.size(), (self.batch_size, self.max_length, self.max_length))

    def test_encoder(self):
        encoder = Encoder(self.input_size, self.hidden_size, num_layers=self.num_layers)
        input_seq = torch.randint(0, self.input_size, (self.batch_size, self.max_length))
        input_lengths = torch.randint(1, self.max_length+1, (self.batch_size,))
        outputs, hidden = encoder(input_seq, input_lengths)
        self.assertEqual(outputs.size(), (self.max_length, self.batch_size, self.hidden_size))
        self.assertEqual(hidden.size(), (self.num_layers * encoder.num_directions, self.batch_size, self.hidden_size))

    def test_decoder(self):
        encoder_outputs = torch.randn(self.max_length, self.batch_size, self.hidden_size)
        encoder_hidden = torch.randn(self.num_layers * 2, self.batch_size, self.hidden_size)  # Assuming bidirectional
        decoder = Decoder(self.output_size, self.hidden_size, Attention('general'))
        input_step = torch.randint(0, self.output_size, (self.batch_size,))
        output, hidden = decoder(input_step, encoder_hidden, encoder_outputs)
        self.assertEqual(output.size(), (self.batch_size, self.output_size))
        self.assertEqual(hidden.size(), (self.num_layers, self.batch_size, self.hidden_size))

if __name__ == '__main__':
    unittest.main()
