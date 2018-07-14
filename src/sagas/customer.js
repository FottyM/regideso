import { call, put, select } from 'redux-saga/effects'
import isEmpty from 'lodash/isEmpty'
import isNill from 'lodash/isNil'
import find from 'lodash/find'
import {
  GET_CURRENT_CUSTOMER,
  GET_CURRENT_CUSTOMER_ERROR,
  GET_CUSTOMERS_READINGS,
  GET_CUSTOMERS_READINGS_ERROR
} from '../actions/actionTypes'

const hound = () => fetch('http://localhost:4000/customers')

export function* fetchUserData() {
  try {
    const response = yield call(hound)
    const result = yield response.json()

    if (isEmpty(result.error)) {
      yield put({ type: GET_CUSTOMERS_READINGS, payload: [...result] })
    } else {
      yield put({
        type: GET_CUSTOMERS_READINGS_ERROR,
        payload: { message: result.error.message }
      })
    }
  } catch (error) {
    yield put({
      type: GET_CUSTOMERS_READINGS_ERROR,
      payload: { message: error.message }
    })
  }
}

export function* getOneUser(action) {
  const { payload: uuid } = action

  try {
    const currentUser = yield select(
      ({ customers }) =>
        !isEmpty(customers.data) ? find(customers.data, { uuid }) : {}
    )

    if (!isEmpty(currentUser)) {
      yield put({ type: GET_CURRENT_CUSTOMER, payload: currentUser })
    } else {
      yield put({
        type: GET_CURRENT_CUSTOMER_ERROR,
        payload: { message: 'Something went wrong try to reload or go back' }
      })
    }
  } catch (error) {
    yield put({
      type: GET_CURRENT_CUSTOMER_ERROR,
      payload: { message: error.message }
    })
  }
}
