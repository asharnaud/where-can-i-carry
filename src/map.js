/* global google MarkerClusterer */

import './markerclusterer.js'
import $ from './zepto-1.2.0.js'
import {GOOGLE_MAP_ID} from './constants.js'

let googleMapScriptLoaded = false
let companyDataIsLoaded = false
let theMap = null
let mapMarkers = {}
let markerCluster = null
let markersArr = []
let theInfoWindow = null
let companies = {}
let companiesObj = {}

function fetchCompanyDataSuccess (data) {
  data.forEach(function (company) {
    companiesObj[company.id] = company
  })

  companyDataIsLoaded = true
  initGMap()
}

function fetchCompanyDataError (error) {
  console.log(error)
}

function fetchCompanyData () {
  $.ajax({
    type: 'GET',
    url: '../data/locations.json',
    // type of data we are expecting in return:
    dataType: 'json',
    success: fetchCompanyDataSuccess,
    error: fetchCompanyDataError
  })
}

function buildInfoWindow (company) {
  var html = '<h1 id="firstHeading" class="firstHeading">' + company.company +
  '</h1>' + '<div id="bodyContent">' + '<p> Is Open Carry Allowed?</p>' +
  '<b>' + company.allowsOpenCarry + '</b>' + '<p> Is Concealed Carry Allowed?</p>' +
  '<b>' + company.allowsConcealedCarry + '</b>' + '</div>'

  return html
}

const HOUSTON_LAT = 29.762589
const HOUSTON_LNG = -95.364761
const MAP_CENTER = {lat: HOUSTON_LAT, lng: HOUSTON_LNG}

function clickMarker (companyId) {
  if (!theInfoWindow) {
    theInfoWindow = new google.maps.InfoWindow({
      content: ''
    })
  }
  // - get the company
  let company = companiesObj[companyId]
  // - build the infoWindow HTML
  var infoWindowHtml = buildInfoWindow(company)
  theInfoWindow.setContent(infoWindowHtml)
  // - show the infoWindow
  var marker = mapMarkers[companyId]
  theInfoWindow.open(theMap, marker)
}

function initGMap () {
  // only initialize the map when both the company data is loaded and the
  // google map script is loaded
  if (!googleMapScriptLoaded || !companyDataIsLoaded) return

  theMap = new google.maps.Map(document.getElementById(GOOGLE_MAP_ID), {
    zoom: 11,
    center: MAP_CENTER
  })

  for (let id in companiesObj) {
    if (!companiesObj.hasOwnProperty(id)) continue
    let marker = new google.maps.Marker({
      position: {lat: companiesObj[id].lat, lng: companiesObj[id].lng}
    })
    marker.addListener('click', clickMarker.bind(null, id))
    markersArr.push(marker)
    mapMarkers[id] = marker
  }

  // Add a marker clusterer to manage the markers.
  markerCluster = new MarkerClusterer(theMap, mapMarkers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
}

window.GMAP_SCRIPT_LOADED = function () {
  googleMapScriptLoaded = true
  initGMap()
}

export { fetchCompanyData }
