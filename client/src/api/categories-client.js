export default class CategoriesApiService {
  /**
   * A function to get all existing todo items
   * @returns {Promise<{ categoryName: string, id: number }[]>}
   */
  static async getCategories() {
    const response = await fetch("/api/categories");
    const categories = await response.json();

    return categories;
  }

  //     /**
  //      * A function to add a new item to the list
  //      * @param itemName: string
  //      * @returns {Promise<object>}
  //      */
  //     static async postItem(itemName) {
  //       const response = await fetch("/item", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ itemName }),
  //       });
  //       const item = await response.json();

  //       return item;
  //     }

  //     /**
  //      * A function to toggle an item in the list
  //      * @param item: { name: string, id: number, status: bool }
  //      * @returns {Promise<boolean>}
  //      */
  //     static async toggleDone(item) {
  //       const response = await fetch(`/item/${item.id}`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ item }),
  //       });

  //       return response.ok;
  //     }

  //     /**
  //      * A function to remove an item from the list
  //      * @param item: { name: string, id: number, status: bool }
  //      * @returns {Promise<boolean>}
  //      */
  //     static async deleteItem(item) {
  //       const response = await fetch("/item", {
  //         method: "DELETE",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ item }),
  //       });

  //       return response.ok;
  //     }
}
