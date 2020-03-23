import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
