const express = require('express');
const {
  errorHandler,
  logError,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.use(require('./routes/index.routes'));

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port' + port);
});
