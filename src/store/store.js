import { createStore, combineReducers, applyMiddleware } from "redux";
import filterReducer from "../reducer/filter"
import thunk from "redux-thunk";

export default () => {
  const store = createStore(
    combineReducers({
        filters: filterReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};