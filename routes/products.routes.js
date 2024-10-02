const express = require('express');
const ProductsService = require('./../services/products.service');
const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.status(200).send('soy un filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const products = service.findOne(id);
  res.status(200).json(products);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message: 'product create',
    data: newProduct,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(201).json({
    message: 'product update',
    data: product,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.status(201).json({
    message: 'product delete',
    id: product,
  });
});

module.exports = router;
