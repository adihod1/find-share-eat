import ApiBase from "./api";
import { objectToQuerystring } from "../utils/url-utils";

export default class RecipeClient extends ApiBase {
  constructor() {
    super("http://localhost:3001/api/recipe");
  }

  // POST
  async addRecipe(userId, recipe) {
    await this._post(`/add-recipe/${userId}`, JSON.stringify(recipe));
  }

  // GET
  async fetchRecipes() {
    return await this._get("/get-all-recipes");
  }

  async fetchRecipesByUserId(userId) {
    return await this._get(`/get-recipe-by-user-id/${userId}`);
  }

  async fetchRecipesByIngredients(options) {
    const querystring = objectToQuerystring(options);
    return await this._get(`/get-recipes-by-ingredients${querystring}`);
  }

  async fetchRecipesByRecipeId(recipeId) {
    return await this._get(`/get-chosen-recipe/${recipeId}`);
  }

  async fetchRecipesByRecipeCategory(recipeCategory) {
    return await this._get(`/get-recipes-by-category${recipeCategory}`);
  }

  async fetchRecipesByRecipeName(recipeName) {
    return await this._get(`/get-recipes-by-name/${recipeName}`);
  }

  // PUT
  async editRecipe(recipeId, recipe) {
    return await this._put(recipe, `/edit-recipe/${recipeId}`);
  }

  // DELETE
  async deleteRecipe(recipeId, recipe) {
    return await this._delete(`/delete-recipe/${recipeId}`);
  }
}
