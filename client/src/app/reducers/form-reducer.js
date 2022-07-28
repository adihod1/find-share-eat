import {
  ADD_CATEGORY,
  GET_CATEGORIES,
  ADD_COOKTIME,
  ADD_INGREDIENTS,
  ADD_PICTURE,
  ADD_PROCEDURES,
} from "../actions/constants";

const initialState = {
  ingredients: [],
  procedures: [],
  cook_time: "",
  categoriesList: [],
  category: "",
  picture: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ADD_INGREDIENTS,
      };
    case ADD_PROCEDURES:
      return {
        ...state,
        procedures: ADD_PROCEDURES,
      };
    case ADD_COOKTIME:
      return {
        ...state,
        cook_time: action.ADD_COOKTIME,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: action.ADD_CATEGORY,
      };
    case GET_CATEGORY:
      return {
        ...state,
        categoriesList: action.GET_CATEGORIES,
      };
    case ADD_PICTURE:
      return {
        ...state,
        picture: action.ADD_PICTURE,
      };
    default:
      return state;
  }
}
