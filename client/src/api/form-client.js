import ApiBase from "./api";

export default class RecipesApiService extends ApiBase {
  constructor() {
    super("http://localhost:3001/api");
  }

  postRecipe(userId, recipe) {
    return this._post(`/add-recipe/${userId}`, recipe);
  }
}
