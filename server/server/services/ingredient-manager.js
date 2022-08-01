const {Ingredient} = require("../db/models");
const {Sequelize} = require("sequelize");


class IngredientManager {
    getIngredients = async () => {
        return await Ingredient.findAll();
    };

    getIngredientsName = async () => {
        return await Ingredient.findAll({
                attributes: [
                    [Sequelize.fn('DISTINCT', Sequelize.col('ingredientName')), 'ingredientName'],
                ]
            }
        );
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