import {
  GET_CUSTOMERS_READINGS,
  GET_CUSTOMERS_READINGS_ERROR,
  GET_CURRENT_CUSTOMER
} from './actionTypes'

export const getCustomersReading = () => {
  const hound = fetch(`http://localhost:4000/customers`).then(res => res.json())
  return dispatch => {
    hound
      .then(res => {
        dispatch({
          type: GET_CUSTOMERS_READINGS,
          payload: [...res]
        })
      })
      .catch(({ message }) => {
        dispatch({
          type: GET_CUSTOMERS_READINGS_ERROR,
          payload: { message }
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
