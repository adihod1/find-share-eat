const {Category} = require("../db/models");

class CategoryManager {
    getCategories = async () => {
        return await Category.findAll();
    };
}

module.exports = new CategoryManager();