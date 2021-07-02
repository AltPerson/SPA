const SET_AUTH = "SET_AUTH";

const defaultState = {
  isAuthenticated: false,
};

export function authReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
}

export const setAuth = (bool) => ({ type: SET_AUTH, payload: bool });
