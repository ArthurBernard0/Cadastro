const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const data = [];

app.post('/cadastro', (req, res) => {
  const { nome, email, telefone } = req.body;
  data.push({ nome, email, telefone });
  res.send('Parabens Otario');
});

app.get('/dados', (req, res) => {
  res.send(data);
});
