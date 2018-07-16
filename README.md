# Regideso

## Setup

1.  `$ npm install` or `$ yarn install`, to install all the dependencies.
2.  `$ nodemon sever/server.js` or `$ node server/server.js` to start the development server on `http://localhost:4000`.
3.  `$ npm start` or `$ yarn start` to start the front-end on `http://localhost:3000`
4.  `$ npm run test` or `$ yarn run test` to run the tests. All components are tested.

_Note: Both the application and the server should be running before it works_

## Tech stack

- [React ](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [React motion](https://github.com/chenglou/react-motion)
- [React collapse](https://github.com/chenglou/react-motion)
- [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [Feather icons](https://feathericons.com/)
- [Epxress js](https://expressjs.com/)
- [Chart js](http://www.chartjs.org/docs/latest/)
- [Jest](https://jestjs.io/), [Enzyme](http://airbnb.io/enzyme/) and [sinon](http://sinonjs.org/releases/v6.0.1/) are used to test the application

## Funtionalities

The application applicaion scopes out the fact that the server is already build and some other parts are already built like the user authentication etc... So it focus on only get the data from the server and rendering them into a chart. Users data are mocked.

So the implementation scopes out some of thoses features and focuses on two things considered more important and also based on the time at hand.

- [x] Render the list of all users, with small charts so that the admin can hava a quick glance at each users consumption.
- [x] User details, the admin can check each users details and in theory interact with it.
- [ ] The front-end or the server could be responsible(preferably the front-end) of sending a request with the latest updates per hour.
- [ ] etc...
