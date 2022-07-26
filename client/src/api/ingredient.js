import ApiBase from "./api";

export default class IngredientClient extends ApiBase {
    constructor() {
        super('/api/ingredient')
    }

    // GET
    async fetchIngredients() {
        return await this._get('/get-ingredients')
    }

    async fetchIngredientsName() {
        return await this._get('/get-ingredients-name')
    }

    // PUT
    async editIngredient(ingredientId, ingredient) {
        return await this._put(ingredient, `/edit-ingredient/:ingredientId${ingredientId}`)
    }

    // DELETE
    async deleteIngredient(ingredientId) {
        return await this._delete(`/delete-ingredient/${ingredientId}`)
    }
}