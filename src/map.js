/* global google MarkerClusterer */

import './markerclusterer.js'
import $ from './zepto-1.2.0.js'

var companyObj = []
console.log(companyObj)

function fetchJSONdata (data) {
  data.forEach(function (item) {
    companyObj.push({company: item.company, lat: item.lat, lng: item.lng, allowsOpenCarry: item.allowsOpenCarry, allowsConcealedCarry: item.allowsConcealedCarry})
  })
  return companyObj
}

$.getJSON('../data/locations.json', fetchJSONdata)

var locations = companyObj.map(function (obj) {
  console.log(obj)
  return [{
    lat: obj.lat,
    lng: obj.lng
  }]
})

console.log(locations)

var contentString = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading"> + companyName</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
     'sandstone rock formation in the southern part of the '+
     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
     'south west of the nearest large town, Alice Springs; 450&#160;km '+
     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
     'features of the Uluru - Kata Tjuta National Park. Uluru is '+
     'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
     'Aboriginal people of the area. It has many springs, waterholes, '+
     'rock caves and ancient paintings. Uluru is listed as a World '+
     'Heritage Site.</p>'+
     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
     'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
     '(last visited June 22, 2009).</p>'+
     '</div>'+
     '</div>';

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
