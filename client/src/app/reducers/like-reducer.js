import actions from "../actions/constants";

const initialState = {
  likeList: [],
};

const likeEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_LIKE:
      const recipeLike = [...state.likeList, action.recipeId];
      return { ...state, recipeList: recipeLike };

    case actions.REMOVE_LIKE:
      console.log("state", action);
      return {
        ...state,
        likeList: state.likeList.filter((like) => like.id !== action.item.id),
      };
    default:
      return state;
  }
};
export default likeEntitiesReducer;
