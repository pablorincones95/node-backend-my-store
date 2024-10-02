const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(require('./routes/index.routes'));

app.listen(port, () => {
  console.log('My port' + port);
});
