const express = require('express');
const app = express();
const port = 3000; 
const usersRoutes = require('./src/routes/users.js');


app.get('/', (req, res) => {
  res.send('Bem-vindo à sua API!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use('/users', usersRoutes);

