import find from 'lodash/find'

import {
  GET_CUSTOMERS_READINGS,
  GET_CUSTOMERS_READINGS_ERROR,
  GET_CURRENT_CUSTOMER,
  GET_CURRENT_CUSTOMER_LOADING,
  GET_CURRENT_CUSTOMER_STOP_LOADING,
  FETCH_CUSTOMER_DATA_REQUESTED,
  GET_CURRENT_CUSTOMER_ERROR
} from '../actions/actionTypes'

const initialState = {
  data: [],
  error: {},
  current: {},
  loading: false,
  uuid: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_CUSTOMER_DATA_REQUESTED:
    return {
      ...state,
      loading: true
    }
  case GET_CURRENT_CUSTOMER_LOADING:
    return {
      ...state,
      loading: true,
      uuid: payload
    }

  case GET_CUSTOMERS_READINGS:
    return {
      ...state,
      data: payload,
      error: {},
      loading: false
    }

  case GET_CURRENT_CUSTOMER_STOP_LOADING:
    return {
      ...state,
      loading: false
    }

  case GET_CUSTOMERS_READINGS_ERROR:
    return {
      ...state,
      error: payload,
      data: [],
      loading: false
    }

  case GET_CURRENT_CUSTOMER:
    return {
      ...state,
      current: { ...payload },
      loading: false
    }

  case GET_CURRENT_CUSTOMER_ERROR:
    return {
      ...state,
      error: { ...payload },
      loading: false
    }

  default:
    return {
      ...state
    }
  }
}

export default reducer
