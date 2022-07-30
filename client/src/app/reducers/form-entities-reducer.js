// import {
//   ADD_CATEGORY,
//   GET_CATEGORIES,
//   ADD_COOKTIME,
//   ADD_INGREDIENTS,
//   ADD_PICTURE,
//   ADD_PROCEDURES,
// } from "../actions/constants";
import actions from "../actions/constants";

const initialState = {
  ingredients: [],
  procedures: [],
  cook_time: "",
  categoriesList: [],
  category: "",
  picture: [],
};

const formEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ADD_INGREDIENTS,
      };
    case actions.ADD_PROCEDURES:
      return {
        ...state,
        procedures: action.ADD_PROCEDURES,
      };
    case actions.ADD_COOKTIME:
      return {
        ...state,
        cook_time: action.ADD_COOKTIME,
      };
    case actions.ADD_CATEGORY:
      return {
        ...state,
        category: action.ADD_CATEGORY,
      };
    case actions.GET_CATEGORIES:
      console.log(action);

      // return {
      //   ...state,
      //   categoriesList: action.GET_CATEGORIES,
      // };
      const { categoriesList } = action.categories;
      console.log("categoriessss", action.categories);
      return { ...state, categoriesList };

    case actions.ADD_PICTURE:
      return {
        ...state,
        picture: action.ADD_PICTURE,
      };
    default:
      return state;
  }
};
export default formEntitiesReducer;
