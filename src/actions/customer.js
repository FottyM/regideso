import {
  GET_CUSTOMERS_READINGS,
  GET_CURRENT_CUSTOMER,
  GET_CURRENT_CUSTOMER_LOADING,
  FETCH_CUSTOMER_DATA_REQUESTED
} from './actionTypes'

export const fecthingRequested = () => ({ type: FETCH_CUSTOMER_DATA_REQUESTED })

export const fecthingOneRequested = uuid => ({
  type: GET_CURRENT_CUSTOMER_LOADING,
  payload: uuid
})

export const getCustomersReading = () => ({
  type: GET_CUSTOMERS_READINGS
})

export const getCurrentCustomer = currentUser => ({
  type: GET_CURRENT_CUSTOMER,
  payload: currentUser
})
