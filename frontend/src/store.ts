import { IAction } from "./interfaces/i-actions";
import { Dispatch } from "react";
import { applyMiddleware } from "redux";
import { createStore, IModuleStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store: IModuleStore<any> = createStore({
  initialState: {},
  enhancers: [applyMiddleware(sagaMiddleware)],
  extensions: [getSagaExtension()]
});

export const dispatch: Dispatch<IAction> = store.dispatch;
export default store;
