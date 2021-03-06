/* global google */
import mori from 'mori'
import MoriComponent from './mori-component'

let theSecondMap = null
let theAutoCompleteBox = null
let theModalMapMarker = null
const ZOOM_LEVEL = 16

const HOUSTON_LAT = 29.762589
const HOUSTON_LNG = -95.364761
const MAP_CENTER = {lat: HOUSTON_LAT, lng: HOUSTON_LNG}

function initSecondMap () {
  theSecondMap = new google.maps.Map(document.getElementById('modalMapContainer'), {
    zoom: 11,
    center: MAP_CENTER
  })
  // create the marker
  let markerDetails = {
    draggable: true,
    map: theSecondMap,
    position: {
      lat: MAP_CENTER.lat,
      lng: MAP_CENTER.lng
    }
  }
  theModalMapMarker = new google.maps.Marker(markerDetails)
  initAutocompleteBox()
}

let newState = ''
  // put the lat, long, and company name in the state object

function fetchLatLng () {
  let latLng = theAutoCompleteBox.getPlace().geometry.location
  newState = mori.assocIn(window.CURRENT_STATE, ['newLocationForm', 'coordinates'], latLng)
  window.NEXT_STATE = newState
}

function fetchCompanyName () {
  setInterval(function () {
    let company = theAutoCompleteBox.getPlace().name
    newState = mori.assocIn(window.CURRENT_STATE, ['newLocationForm', 'companyName'], company)
    window.NEXT_STATE = newState
  }, 10)
}

function onAutocompleteChoice () {
  let place = theAutoCompleteBox.getPlace()
  // place.geometry.location get the lat and long
  theSecondMap.setCenter(place.geometry.location)
  theSecondMap.setZoom(ZOOM_LEVEL)
  theModalMapMarker.setPosition(place.geometry.location)
  fetchLatLng()
  fetchCompanyName()
}

function initAutocompleteBox () {
  let boxEl = document.getElementById('AutocompleteBox')
  theAutoCompleteBox = new google.maps.places.Autocomplete(boxEl)
  theAutoCompleteBox.addListener('place_changed', onAutocompleteChoice)
}

class SecondMap extends MoriComponent {
  // initSecondMap will only run after the modal is in the DOM.
  componentDidMount () {
    console.log('modal map component mounted!')
    initSecondMap()
  }

  render () {
    return (
      <div>
        <div id='modalMapContainer' className='add-location-map' />
        <input type='text' placeholder='Address Search' id='AutocompleteBox' className='the-autocomplete-box' />
      </div>
    )
  }
}

export default SecondMap
