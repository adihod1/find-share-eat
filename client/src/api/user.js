import ApiBase from "./api";

export default class IngredientClient extends ApiBase {
    constructor() {
        super('/api/user')
    }

    // GET
    async fetchUserById(userId) {
        return await this._get(`/get-user/${userId}`)
    }
}