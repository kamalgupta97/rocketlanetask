import { applyMiddleware, compose, createStore } from "redux";
import { taskReducer } from "./Task/taskReducer";

const taskMiddleware = (store) => (next) => (action) => {
  return typeof action == "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

export const store = createStore(
  taskReducer,
  compose(applyMiddleware(taskMiddleware))
);
