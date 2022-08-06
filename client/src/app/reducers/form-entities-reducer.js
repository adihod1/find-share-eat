import actions from "../actions/constants";

const initialState = {
  ingredients: [],
  measurement: "",
  quantity: "",
  procedures: [],
  cook_time: "",
  categoriesList: [],
  instructions: "",
  category: "",
  picture: [],
  recipeList: [],
};

const formEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_RECIPE:
      const recipeInput = [...state.recipeList, action.recipe];
      return { ...state, recipeList: recipeInput };

    case actions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
      };

    case actions.ADD_INSTRUCTIONS:
      return {
        ...state,
        instructions: action.instructions,
      };
    case actions.ADD_COOK_TIME:
      return {
        ...state,
        cook_time: action.ADD_COOK_TIME,
      };

    case actions.ADD_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    case actions.GET_CATEGORIES:
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
