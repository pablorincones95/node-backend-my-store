const boom = require('@hapi/boom');
const { models } = require('./../libraries/sequelize');

class CustomerService {
  constructor() {}

  async create(customer) {
    console.log(customer);
    const newCustomer = await models.Customer.create(customer);
    return newCustomer;
  }

  async find() {
    const customer = await models.Customer.findAll();
    return customer;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return user;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const userUpdate = await customer.update(changes);
    return userUpdate;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
