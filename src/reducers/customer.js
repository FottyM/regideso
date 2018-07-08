import { GET_CUSTOMERS_READINGS } from '../actions/actionTypes'
const initialState = {
  data: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_READINGS: {
      return {
        ...state,
        ...action.GET_CUSTOMERS_READINGS
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default reducer
