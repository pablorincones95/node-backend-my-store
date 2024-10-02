const express = require('express');
const cors = require('cors');
const {
  errorHandler,
  logError,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

// const whiteList = [
//   'http://localhost:8080',
//   'http://localhost:4200',
//   'https://myapp.com',
//   'http://127.0.0.1:5500',
// ];

// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('acceso de cors no permitido'));
//     }
//   },
// };

app.use(cors());

app.use(require('./routes/index.routes'));

app.use(logError);

app.use(boomErrorHandler);

app.use(errorHandler);

app.listen(port, () => {
  console.log('My port' + port);
});
