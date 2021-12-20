import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import { createWrapper, withRedux } from "next-redux-wrapper";

const initialstate = {};

const middleware = [thunk];
const makeStore = (context) =>
  createStore(
    rootReducer,
    initialstate,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(...middleware))
      : applyMiddleware(...middleware)
  );

export default createWrapper(makeStore);
