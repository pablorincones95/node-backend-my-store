const express = require('express');
const ProductsService = require('./../services/products.service');
const validatorHandler = require('./../middleware/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/products.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  try {
    const products = await service.find();
    res.status(201).json({
      message: 'product list',
      data: products,
    });
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const products = await service.findOne(id);
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  },
);

router.get('/filter', async (req, res) => {
  res.status(200).send('soy un filtro');
});

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
      message: 'product create',
      data: newProduct,
    });
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.status(201).json({
        message: 'product update',
        data: product,
        id,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.status(201).json({
    message: 'product delete',
    id: product,
  });
});

module.exports = router;
