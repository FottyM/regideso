import {
  GET_CUSTOMERS_READINGS,
  GET_CUSTOMERS_READINGS_ERROR
} from './actionTypes'

export const getCustomersReading = async () => {
  try {
    const data = await fetch(`http://localhost:4000/customers`).then(res => {
      return res.json()
    })

    return dispatch => {
      return {
        type: GET_CUSTOMERS_READINGS,
        payload: { ...data }
      }
    }
  } catch (error) {
    return {
      type: GET_CUSTOMERS_READINGS_ERROR,
      payload: { ...error }
    }
  }
}
