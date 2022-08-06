import ApiBase from "./api";

export default class CategoryClient extends ApiBase {
  constructor() {
    super("/api/category");
  }

  // GET
  async fetchCategories() {
    return await this._get("/get-categories");
  }
}
