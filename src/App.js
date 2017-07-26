import mori from 'mori'
import MoriComponent from './mori-component'
import Modal from './modal.js'
import SideBar from './sidebar.js'
import About from './about.js'
import StateExplorer from './state-explorer.js'
import {morilog} from './util.js'
import {GOOGLE_MAP_ID} from './constants.js'
import './index.css'
import HamburgerMenu from './menu.js'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

function bodyComponent () {
  let location = mori.get(window.CURRENT_STATE, 'locationHash')
  if (location !== '') {
    console.log('this is the bodyComponent')
    return (
      About()
    )
  } else {
    return (
      <div>
        <div className='mapContainer' id={GOOGLE_MAP_ID} />
      </div>
    )
  }
}

class App extends MoriComponent {
  render () {
    let modalComponent = null
    if (mori.get(this.props.imdata, 'isModalShowing')) {
      modalComponent = <Modal imdata={this.props.imdata} />
    }

    let stateExplorerComponent = null
    if (showStateExplorer) {
      stateExplorerComponent = <StateExplorer imdata={this.props.imdata} />
    }

    return (
      <div id='appContainer2'>
        <section id='mainContainer'>
          {bodyComponent()}
          <SideBar imdata={this.props.imdata} />
          {modalComponent}
          {HamburgerMenu()}
        </section>
        {stateExplorerComponent}
      </div>
    )
  }
}

export default App
