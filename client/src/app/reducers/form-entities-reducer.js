import actions from "../actions/constants";

const initialState = {
  ingredient: "",
  measurement: "",
  quantity: "",
  procedures: [],
  cook_time: "",
  categoriesList: [],
  category: "",
  picture: [],
  recipeList: [],
};

const formEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_RECIPE:
      const recipeInput = [...state.recipeList, action.item];
      return { ...state, recipeList: recipeInput };

    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: action.ADD_INGREDIENT,
      };
    case actions.ADD_MEASUREMENT:
      return {
        ...state,
        measurement: action.ADD_MEASUREMENT,
      };

    case actions.ADD_QUANTITY:
      return {
        ...state,
        quantity: action.ADD_QUANTITY,
      };

    case actions.ADD_INSTRUCTION:
      return {
        ...state,
        instructions: action.ADD_INSTRUCTION,
      };
    case actions.ADD_COOKTIME:
      return {
        ...state,
        cook_time: action.ADD_COOKTIME,
      };
    case actions.ADD_CATEGORY:
      console.log("state", action);
      return {
        ...state,
        category: action.category,
      };

    case actions.GET_CATEGORIES:
      // console.log("action", action);
      // const categoriesList = action.categories;
      // console.log("categoriessss", categoriesList);

      return {
        ...state,
        categoriesList: action.categories,
      };

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
