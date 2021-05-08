import React from 'react'
import { render } from 'react-dom'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'
import App from './components/App'
import './index.css'

const overmind = createOvermind(config, {
  devtools: true
})

render((
  <Provider value={overmind}>
    <App/>
  </Provider>
), document.querySelector('#app'))
