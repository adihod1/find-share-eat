import ApiBase from "./api";

export default class CategoriesApiService extends ApiBase {
  constructor() {
    super("http://localhost:3001/api");
  }

  getAllCategories() {
    return this._get("/get-categories");
  }
}
