import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "../reducers";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//method from Redux to use Saga:
const composed = compose(
  applyMiddleware(sagaMiddleware),
  devTools
);

export const store = createStore(reducer, composed);

sagaMiddleware.run(watcherSaga);
