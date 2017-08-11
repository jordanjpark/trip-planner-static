var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFuanBhcmsiLCJhIjoiY2o2ODNsMmpmMGJwazMycGx6aW5tbzZlMSJ9.pplML14BA5skYWRAK4OAdQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/satellite-streets-v10' // mapbox has lots of different map styles available
});



const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([40.807316, -73.964761]).addTo(map);
