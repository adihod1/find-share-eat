import ApiBase from "./api";

export default class CategoriesApiService extends ApiBase {
  constructor() {
    super("http://localhost:3001/api");
  }

  getAllCategories(categories) {
    return this._get("/get-categories", JSON.stringify({ categories }));
  }
}

/**
  
  //  */
// static async getCategories() {
//   const response = await fetch("http://localhost:3001/get-categories");
//   const categories = await response.json();
//   console.log("response", categories);
//   return categories;
// }
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
// }
