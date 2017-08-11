var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const markerImages = {
	activity: 'url(http://i.imgur.com/WbMOfMl.png)',
	hotel: 'url(http://i.imgur.com/D9574Cu.png)',
	restaurant: 'url(http://i.imgur.com/cqR6pUI.png)'
}

function markerFactory(name, long, lat, map, key){
	let markerDomEl = document.createElement("div");
	markerDomEl.style.width = "32px";
	markerDomEl.style.height = "39px";
	markerDomEl.style.backgroundImage = markerImages[key];

	new mapboxgl.Marker(markerDomEl).setLngLat([long, lat]).addTo(map);
}

module.exports = ({
	markerImages,
	markerFactory
});
