import {
  GET_CUSTOMERS_READINGS,
  GET_CUSTOMERS_READINGS_ERROR,
  GET_CURRENT_CUSTOMER
} from '../actions/actionTypes'
const initialState = {
  data: [],
  error: null,
  current: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CUSTOMERS_READINGS:
      return {
        ...state,
        data: payload,
        error: null
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
