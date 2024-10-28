const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index.routes');
const {
  errorHandler,
  logError,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

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

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logError);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port' + port);
});
