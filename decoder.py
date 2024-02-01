import torch
import torch.nn as nn

class Decoder(nn.Module):
    def __init__(self, output_size, hidden_size, attention, num_layers=1, dropout=0.1):
        super(Decoder, self).__init__()
        self.output_size = output_size
        self.hidden_size = hidden_size
        self.attention = attention
        self.num_layers = num_layers
        self.dropout = nn.Dropout(dropout)
        
        self.embedding = nn.Embedding(output_size, hidden_size)
        self.gru = nn.GRU(hidden_size * 2, hidden_size, num_layers=num_layers, dropout=dropout)
        self.out = nn.Linear(hidden_size, output_size)

    def forward(self, input_step, last_hidden, encoder_outputs):
        embedded = self.embedding(input_step)
        embedded = self.dropout(embedded)
        attn_weights = self.attention(last_hidden[-1], encoder_outputs)
        context = attn_weights.unsqueeze(1).bmm(encoder_outputs.transpose(0, 1))
        context = context.transpose(0, 1)
        rnn_input = torch.cat((embedded, context), 2)
        output, hidden = self.gru(rnn_input, last_hidden)
        output = output.squeeze(0)
        output = nn.functional.log_softmax(self.out(output), dim=1)
        return output, hidden
