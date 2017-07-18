import { render } from 'inferno'
import App from './App'
import initGMap from './map'
import './index.css'

const initialState = {
  classes: 'modal-hide',
  fname: '',
  lname: '',
  email: ''
}

let appState = initialState

const rootEl = document.getElementById('app')

function startInfernoRenderLoop () {
  render(App(appState), rootEl)
  window.requestAnimationFrame(startInfernoRenderLoop)
}

window.requestAnimationFrame(startInfernoRenderLoop)

// entry point for the whole enchilada
function globalInit () {
  startInfernoRenderLoop()
}

window.addEventListener('load', globalInit)

window.INIT_GMAP = initGMap

export default appState
