import ApiBase from "./api";
import { objectToQuerystring } from "../utils/url-utils";

export default class LikeClient extends ApiBase {
  constructor() {
    super("/api/like");
  }

  // POST
  async addLike(userId, recipeId) {
    console.log("post", userId, recipeId);
    return await this._post(`/add-like/${userId}`, JSON.stringify(recipeId));
  }

  // DELETE
  async removeLike(userId, recipeId) {
    return await this._delete(
      `/delete-like/${userId}`,
      JSON.stringify(recipeId)
    );
  }
}
