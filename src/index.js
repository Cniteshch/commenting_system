import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import rootReducer from "./reducers";
import HomePage from "./containers";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import rootSaga from './sagas/index';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [];
const enhancers = [];
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, compose(...enhancers));
const persistor = persistStore(store)
const rootElement = document.getElementById("root");
sagaMiddleware.run(rootSaga);


render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
      </PersistGate>
  </Provider>,
  rootElement
);
