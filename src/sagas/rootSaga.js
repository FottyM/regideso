import { takeEvery } from 'redux-saga/effects'

import {
  GET_CURRENT_CUSTOMER_LOADING,
  FETCH_CUSTOMER_DATA_REQUESTED
} from '../actions/actionTypes'

import { fetchUserData, getOneUser } from './customer'

export default function* rootSaga() {
  yield takeEvery(FETCH_CUSTOMER_DATA_REQUESTED, fetchUserData)
  yield takeEvery(GET_CURRENT_CUSTOMER_LOADING, getOneUser)
}
