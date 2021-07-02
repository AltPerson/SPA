import { createStore } from "redux";
import { authReducer } from "../reducers/authReducer";

export const store = createStore(authReducer);
