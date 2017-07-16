/* global google MarkerClusterer */

import './markerclusterer.js'
import $ from './zepto-1.2.0.js'

var companyObj = []
var companyName = ''

function fetchJSONdata (data) {
  data.forEach(function (item) {
    companyObj.push({company: item.company, lat: item.lat, lng: item.lng, allowsOpenCarry: item.allowsOpenCarry, allowsConcealedCarry: item.allowsConcealedCarry})
  })
  buildLocations()
  buildInfoWindow()
}

$.getJSON('../data/locations.json', fetchJSONdata)

var locations = []

function buildLocations () {
  companyObj.map(function (obj) {
    return locations.push({
      lat: obj.lat,
      lng: obj.lng
    })
  })
}

function buildInfoWindow () {
  companyName = companyObj.company
  console.log(companyName)
  return companyName
}

var contentString = '<div id="content">' +
     '<div id="siteNotice">' +
     '</div>' +
     '<h1>' + companyName + '</h1>' +
     '<div id="bodyContent">' +
     '<p>This is the Info Window!</p>' +
     '</div>' +
     '</div>'

function initGMap () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 29.762589, lng: -95.364761}
  })

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  })

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      animation: google.maps.Animation.DROP
    })
})

function addInfoWindowClick () {
  markers.forEach(function (marker) {
    marker.addListener('click', function () {
       infowindow.open(map, marker)
   })
  })
}

addInfoWindowClick()

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

}

export default initGMap
