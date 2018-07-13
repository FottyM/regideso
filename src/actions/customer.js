import {
  GET_CUSTOMERS_READINGS,
  GET_CUSTOMERS_READINGS_ERROR,
  GET_CURRENT_CUSTOMER,
  GET_CURRENT_CUSTOMER_LOADING,
  GET_CURRENT_CUSTOMER_STOP_LOADING
} from './actionTypes'

export const getCustomersReading = () => {
  const hound = fetch(`http://localhost:4000/customers`).then(res => res.json())
  return dispatch => {
    dispatch({ type: GET_CURRENT_CUSTOMER_LOADING })
    hound
      .then(res => {
        dispatch({
          type: GET_CUSTOMERS_READINGS,
          payload: [...res]
        })
      })
      .catch(error => {
        dispatch({
          type: GET_CUSTOMERS_READINGS_ERROR,
          payload: { ...error }
        })
      })
  }
}

export const getCurrentCustomer = uuid => {
  return {
    type: GET_CURRENT_CUSTOMER,
    payload: uuid
  }
}
