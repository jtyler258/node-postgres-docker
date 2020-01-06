const models = require('../../db/models');

class BrandController {
  static async list() {
    return await models.Brand.findAll({});
  }

  static async get(id) {
    return await models.Brand.findOne({
      where: {
        id: id
      }
    });
  }
  
  static async create(name) {
    return await models.Brand.create({
      name: name
    });
  }

  static async update(id, name) {
    const [status] = await models.Brand.update({
      name: name
    }, {
      returning: true,
      where: {
        id: id
      }
    });

    return status;
    // const brand = await BrandController.get(id);
    // if (!brand) {
    //   return undefined;
    // }

    // return await brand.updateAttributes({
    //   name: name
    // });
  }

  static async delete(id) {
    return await models.Brand.destroy({
      where: {
        id: id
      }
    });
  }
}

module.exports = BrandController;