const express = require('express');
const ProductsService = require('./../services/products.service');
const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const user = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.status(200).send('soy un filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.status(200).json(user);
});

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'user create',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(201).json({
    message: 'user update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(201).json({
    message: 'user delete',
    id,
  });
});

module.exports = router;
