const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.send('bienvenido a un servidor en express para apis');
});

/**
 * @Endpoints
 * name: products
 * description: products Endpoints
 */

router.use('/api/v1/products', require('./products.routes'));

/**
 * @Endpoints
 * name: users
 * description: users Endpoints
 */

router.use('/api/v1/users', require('./users.routes'));
/**
 * @Endpoints
 * name: categories
 * description: categories Endpoints
 */

router.use('/api/v1/categories', require('./categories.routes'));

module.exports = router;
