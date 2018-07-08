import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import './index.css'
import './includes/index'
import App from './App'
import store from './store/store'
import registerServiceWorker from './registerServiceWorker'

const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

render(<Root />, document.getElementById('root'))
registerServiceWorker()
