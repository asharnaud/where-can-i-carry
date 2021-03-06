import mori from 'mori'
import About from './about.js'
import MoriComponent from './mori-component'
import Modal from './modal.js'
import SideBar from './sidebar.js'
import StateExplorer from './state-explorer.js'
import HamburgerMenu from './menu.js'

import {morilog} from './util.js'
import {GOOGLE_MAP_ID} from './constants.js'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

class Map extends MoriComponent {
  render () {
    const isShowing = mori.get(this.props.imdata, 'isShowing')
    const filters = mori.get(this.props.imdata, 'filters')

    let style = {}
    if (!isShowing) style = {display: 'none'}

    // TODO: write a descriptive comment about why there are nested <div>s here
    return (
      <div style={style}>
        <div>
          <div className='mapContainer' id={GOOGLE_MAP_ID} />
          <SideBar imdata={filters} />
        </div>
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

    const isMenuShowing = mori.get(this.props.imdata, 'isMenuShowing')

    const route = mori.get(this.props.imdata, 'route')

    const mapArgs = mori.hashMap('isShowing', (route === '/map'),
                                 'filters', mori.get(this.props.imdata, 'mapFilters'))
    const mapComponent = <Map imdata={mapArgs} />

    let aboutComponent = null
    if (route === '/about') aboutComponent = About()

    return (
      <div id='appContainer2'>
        <section id='mainContainer'>
          {mapComponent}
          {aboutComponent}
          {modalComponent}
          {HamburgerMenu(isMenuShowing)}
        </section>
        {stateExplorerComponent}
      </div>
    )
  }
}

export default App
