import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np

class NMTModel(nn.Module):
    def __init__(self, input_size, output_size, hidden_size):
        super(NMTModel, self).__init__()
        self.encoder = Encoder(input_size, hidden_size)
        self.decoder = Decoder(output_size, hidden_size)

    def forward(self, source, target, source_lengths, target_lengths):
        encoder_outputs, hidden = self.encoder(source, source_lengths)
        output, attn_weights = self.decoder(target, hidden, encoder_outputs)
        return output, attn_weights

class Encoder(nn.Module):
    def __init__(self, input_size, hidden_size):
        super(Encoder, self).__init__()
        self.hidden_size = hidden_size
        self.embedding = nn.Embedding(input_size, hidden_size)
        self.gru = nn.GRU(hidden_size, hidden_size)

    def forward(self, input_seq, input_lengths):
        embedded = self.embedding(input_seq)
        packed = nn.utils.rnn.pack_padded_sequence(embedded, input_lengths)
        outputs, hidden = self.gru(packed)
        outputs, _ = nn.utils.rnn.pad_packed_sequence(outputs)
        return outputs, hidden

class Attention(nn.Module):
    def __init__(self, method, hidden_size):
        super(Attention, self).__init__()
        self.method = method
        self.hidden_size = hidden_size
        if self.method == 'dot':
            pass
        elif self.method == 'general':
            self.attn = nn.Linear(self.hidden_size, hidden_size)
        elif self.method == 'concat':
            self.attn = nn.Linear(self.hidden_size * 2, hidden_size)
            self.v = nn.Parameter(torch.FloatTensor(hidden_size))

    def forward(self, hidden, encoder_outputs):
        attn_energies = self.score(hidden, encoder_outputs)
        return nn.functional.softmax(attn_energies, dim=1)

    def score(self, hidden, encoder_outputs):
        if self.method == 'dot':
            pass
        elif self.method == 'general':
            energy = self.attn(encoder_outputs)
            energy = torch.bmm(energy, hidden.unsqueeze(2))
        elif self.method == 'concat':
            hidden = hidden.repeat(encoder_outputs.size(0), 1, 1)
            energy = torch.tanh(self.attn(torch.cat((hidden, encoder_outputs), 2)))
            energy = torch.bmm(energy, self.v.unsqueeze(0).unsqueeze(0))
        return energy.squeeze(2)

class Decoder(nn.Module):
    def __init__(self, output_size, hidden_size, attention_method='general'):
        super(Decoder, self).__init__()
        self.hidden_size = hidden_size
        self.output_size = output_size
        self.embedding = nn.Embedding(output_size, hidden_size)
        self.gru = nn.GRU(hidden_size, hidden_size)
        self.out = nn.Linear(hidden_size, output_size)
        self.attention = Attention(attention_method, hidden_size)

    def forward(self, input_step, last_hidden, encoder_outputs):
        embedded = self.embedding(input_step)
        attn_weights = self.attention(last_hidden[-1], encoder_outputs)
        context = attn_weights.unsqueeze(1).bmm(encoder_outputs.transpose(0, 1))
        context = context.transpose(0, 1)
        rnn_input = torch.cat((embedded, context), 2)
        output, hidden = self.gru(rnn_input, last_hidden)
        output = output.squeeze(0)
        output = nn.functional.log_softmax(self.out(output), dim=1)
        return output, hidden
