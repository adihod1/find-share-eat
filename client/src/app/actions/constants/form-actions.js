import {
  ADD_CATEGORY,
  ADD_COOKTIME,
  ADD_INGREDIENTS,
  ADD_PICTURE,
  ADD_PROCEDURES,
} from "./index";

export const addIngredients = (ingredients) => {
  return {
    type: ADD_INGREDIENTS,
  };
};

export const addProcedures = (procedures) => {
  return {
    type: ADD_PROCEDURES,
  };
};

export const addCooktime = (cook_time) => {
  return {
    type: ADD_COOKTIME,
    payload: cook_time,
  };
};

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
  };
};

export const addPicture = (picture) => {
  return {
    type: ADD_PICTURE,
  };
};
