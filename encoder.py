import torch
import torch.nn as nn

class Encoder(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers=1, bidirectional=False, dropout=0):
        super(Encoder, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.num_directions = 2 if bidirectional else 1
        self.embedding = nn.Embedding(input_size, hidden_size)
        self.gru = nn.GRU(hidden_size, hidden_size, num_layers=num_layers, bidirectional=bidirectional, dropout=dropout)

    def forward(self, input_seq, input_lengths):
        embedded = self.embedding(input_seq)
        packed = nn.utils.rnn.pack_padded_sequence(embedded, input_lengths)
        outputs, hidden = self.gru(packed)
        outputs, _ = nn.utils.rnn.pad_packed_sequence(outputs)
        if self.num_layers > 1:
            # For multi-layer GRU, concatenate the final states of each layer
            hidden = torch.cat([hidden[i,:,:] for i in range(self.num_layers)], dim=1)
        return outputs, hidden
