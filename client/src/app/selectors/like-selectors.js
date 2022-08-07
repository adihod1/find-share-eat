const getLikeEntities = (state) => state.likeEntitiesReducer;

export const getLikeList = (state) => getLikeEntities(state).likeList;
