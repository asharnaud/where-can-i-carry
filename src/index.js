import { render } from 'inferno'
import App from './App'
import { fetchCompanyData } from './map'
import mori from 'mori'
import './index.css'

const initialState = {
  isModalShowing: false,
  isMenuShowing: false,
  newLocationForm: {
    fname: '',
    lname: '',
    email: ''
  }
}

// CURRENT_STATE is always the current state of the application
window.CURRENT_STATE = null
// NEXT_STATE is the next state the application should be in
// Start it off with a PDS version of our initialState object.
window.NEXT_STATE = mori.toClj(initialState)

const rootEl = document.getElementById('appContainer')
let renderCount = 0

function InfernoRenderLoop () {
  // Only trigger a render if CURRENT_STATE and NEXT_STATE are different.
  // NOTE: checking deep equality of a persistent data structure is a fast and
  //       cheap operation, even for large data structures
  if (!mori.equals(window.CURRENT_STATE, window.NEXT_STATE)) {
    // next state is now our current state
    window.CURRENT_STATE = window.NEXT_STATE
    // render(App(window.CURRENT_STATE), rootEl)
    render(<App imdata={window.CURRENT_STATE} />, rootEl)
    renderCount = renderCount + 1
    // console.log('Render #' + renderCount)
  }
  window.requestAnimationFrame(InfernoRenderLoop)
}

window.requestAnimationFrame(InfernoRenderLoop)

const GMAP_SCRIPT_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC67l8WPqxwg_Acx1XMIfKR3_VEFHVlbyI&libraries=places&callback=window.GMAP_SCRIPT_LOADED'

// Make sure the Google Maps script gets loaded after the bundle script.

function injectGoogleMapScript () {
  let scriptEl = document.createElement('script')
  scriptEl.type = 'text/javascript'
  scriptEl.src = GMAP_SCRIPT_URL
  document.body.appendChild(scriptEl)
}

// entry point for the whole enchilada
function globalInit () {
  injectGoogleMapScript()
  fetchCompanyData()
  InfernoRenderLoop()
}

window.addEventListener('load', globalInit)
