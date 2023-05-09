import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import EmployeeReducer from "./reducers/EmployeeReducer";

const reducer = combineReducers({
  Employee: EmployeeReducer
});

const initialState = {};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
