/* global google MarkerClusterer */

import './markerclusterer.js'
import $ from './zepto-1.2.0.js'

function getLatLng (data) {
  var locationsObj = []
  data.forEach(function (item) {
    locationsObj.push({lat: item.lat, lng: item.lng})
  })
  console.log(locationsObj)
  return locationsObj
}

$.getJSON('../data/locations.json', getLatLng)

var locations = [
  {lat: 29.76706, lng: -95.416946},
  {lat: 29.758715, lng: -95.41282},
  {lat: 29.763483, lng: -95.405617},
  {lat: 29.77153, lng: -95.408707},
  {lat: 29.764973, lng: -95.409737}
]

function initGMap () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 29.762589, lng: -95.364761}
  })

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    })
  })

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
}

export default initGMap
