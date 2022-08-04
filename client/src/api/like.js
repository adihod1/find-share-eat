import ApiBase from "./api";
import { objectToQuerystring } from "../utils/url-utils";

export default class LikeClient extends ApiBase {
  constructor() {
    super("http://localhost:3001/api/like");
  }

  // POST
  async addLike(userId, recipeId) {
    await this._post(`/add-like/${userId}`, recipeId);
  }

  // DELETE
  async removeLike(userId, recipeId) {
    return await this._delete(`/delete-like/${userId}`, recipeId);
  }
}
