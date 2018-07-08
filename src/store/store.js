import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import customers from '../reducers/customer'

const rootReducer = combineReducers({ customers })
const middleWares = applyMiddleware(logger, thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, {}, composeEnhancers(middleWares))
