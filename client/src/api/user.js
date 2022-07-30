import ApiBase from "./api";

export default class IngredientClient extends ApiBase {
    constructor() {
        super('http://localhost:3001/api/recipe')
    }

    // GET
    async fetchUserById(userId) {
        return await this._get(`/get-user/${userId}`)
    }
}