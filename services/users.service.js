const { faker } = require('@faker-js/faker');

class UserService {
  constructor(parameters) {
    this.user = [];
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

  create() {}

  find() {
    return this.user;
  }

  findOne(id) {
    return this.user.find((product) => product.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductsService;
