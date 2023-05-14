import { createStore } from "redux";
import combinReducer from "./combinReducers";




const store = createStore(combinReducer);


export default store