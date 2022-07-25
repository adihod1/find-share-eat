const getLoginState = state => state.login;

export const getLoginIsModalOpen = state => getLoginState(state).isModalOpen;
export const getLoginIsLoggedIn = state => getLoginState(state).isLoggedIn;
export const getLoginUser = state => getLoginState(state).user;
