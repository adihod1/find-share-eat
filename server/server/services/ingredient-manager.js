const {Ingredient} = require("../db/models");

class IngredientManager {
    getIngredients = async () => {
        return await Ingredient.findAll();
    };

    editIngredient = async (id, data) => {
        await Ingredient.update(
            {data},
            {where: {id: id}}
        );
    };

    deleteIngredient = async (id) => {
        await Ingredient.destroy({where: {id: id}});
    };
}

module.exports = new IngredientManager();