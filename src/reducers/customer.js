import {
  GET_CUSTOMERS_READINGS,
  GET_CUSTOMERS_READINGS_ERROR,
  GET_CURRENT_CUSTOMER,
  GET_CURRENT_CUSTOMER_LOADING,
  GET_CURRENT_CUSTOMER_STOP_LOADING
} from '../actions/actionTypes'

const initialState = {
  data: [],
  error: {},
  current: {},
  loading: false
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_CUSTOMER_LOADING:
      return {
        ...state,
        loading: true
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
        data: []
      }

    case GET_CURRENT_CUSTOMER:
      return {
        ...state,
        current: state.data.find(user => user.uuid === payload)
      }

    default:
      return {
        ...state
      }
  }
}

export default reducer
