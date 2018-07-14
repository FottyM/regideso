import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import customers from '../reducers/customer'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ customers })
const middleWares =
  process.env.NODE_ENV === 'development'
    ? [sagaMiddleware, logger]
    : [sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
)

sagaMiddleware.run(rootSaga)

export default store
