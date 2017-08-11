var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
var marker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFuanBhcmsiLCJhIjoiY2o2ODNsMmpmMGJwazMycGx6aW5tbzZlMSJ9.pplML14BA5skYWRAK4OAdQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/satellite-streets-v10' // mapbox has lots of different map styles available
});

map.addControl(new mapboxgl.NavigationControl());


marker.markerFactory('Fullstack', -74.009, 40.705, map, 'hotel');

marker.markerFactory('Chelsea Market', -74.005, 40.742, map, 'restaurant');

marker.markerFactory('Fullstack', -74.009, 41.705, map, 'activity');

marker.markerFactory('Fullstack', -72.009, 40.705, map, 'restaurant');

marker.markerFactory('Fullstack', -74.009, 49.705, map, 'hotel');
