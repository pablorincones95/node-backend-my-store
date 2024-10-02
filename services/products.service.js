const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor(parameters) {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.avatar(),
      });
    }
  }

  create(product) {
    const newProduct = {
      id: faker.database.mongodbObjectId(),
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  update(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
