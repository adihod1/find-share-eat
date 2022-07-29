import ApiBase from "./api";

export default class RecipeClient extends ApiBase {
    constructor() {
        super('http://localhost:3001/api')
    }

    async fetchRecipes() {
        const re = await this._get('/recipes-all')
        return re
    }

}