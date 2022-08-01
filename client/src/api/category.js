import ApiBase from "./api";

export default class IngredientClient extends ApiBase {
  constructor() {
    super("http://localhost:3001/api/category");
  }

  // GET
  async fetchCategories() {
    return await this._get("/get-categories");
  }
}
