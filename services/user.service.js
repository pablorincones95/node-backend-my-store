const boom = require('@hapi/boom');
const { models } = require('./../libraries/sequelize');

class UserService {
  constructor() {}

  async create(user) {
    const newUser = await models.User.create(user);
    return newUser;
  }

  async find() {
    const user = await models.User.findAll();
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const userUpdate = await user.update(changes);
    return userUpdate;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
