import uuid from 'uuid4'
import moment from 'moment'

const randArr = () => {
  var arr = []
  while (arr.length < 24) {
    var randomnumber = Math.floor(Math.random() * 100) + 1
    if (arr.indexOf(randomnumber) > -1) continue
    arr[arr.length] = randomnumber
  }
  return arr
}

export default [
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  },
  {
    uuid: uuid(),
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    homeAdress: 'Hope county,TN, 3310',
    consumption: [
      {
        id: 1,
        period: moment(),
        data: [...randArr()]
      }
    ]
  }
]
