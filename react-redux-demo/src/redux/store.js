import { createStore } from "redux";
import eggReducer from "./egg/eggReducer";

const store = createStore(eggReducer);

export default store;