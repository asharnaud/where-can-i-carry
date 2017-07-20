/* global google */
import MoriComponent from './mori-component'
import './index.css'

let theSecondMap = null

const HOUSTON_LAT = 29.762589
const HOUSTON_LNG = -95.364761
const MAP_CENTER = {lat: HOUSTON_LAT, lng: HOUSTON_LNG}

function initSecondMap () {
  theSecondMap = new google.maps.Map(document.getElementById('modalMapContainer'), {
    zoom: 11,
    center: MAP_CENTER
  })

  // TODO: add a marker to the map
  // and events when that marker moves to update appState
}

class SecondMap extends MoriComponent {
  componentDidMount () {
    console.log('modal map component mounted!')
    initSecondMap()
  }

  componentDidUnmount () {
    console.log('modal map unmounted!')
    // TODO: reset anything related to the Google Map here
    // theSecondMap.destroy()
  }

  render () {
    return (
      <div id='modalMapContainer' className='add-location-map' />
    )
  }
}

export default SecondMap
