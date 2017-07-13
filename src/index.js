import { render } from 'inferno'
import App from './App'
import initGMap from './map'
import './index.css'

function startInfernoRenderLoop () {
  // TODO: write me
  render(<App />, document.getElementById('app'))
}

// entry point for the whole enchilada
function globalInit () {
  startInfernoRenderLoop()
}

window.addEventListener('load', globalInit)

window.INIT_GMAP = initGMap
