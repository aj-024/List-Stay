window.onload = function() {
    var longitude = 73.8552; // Longitude for Pune
    var latitude = 18.5204;  // Latitude for Pune
    initializeMap(longitude, latitude);
};

function initializeMap(longitude, latitude) {
    const map = new ol.Map({
        target: 'map', // Correct target: match the div id
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM() // Base layer from OpenStreetMap
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]), // Center based on provided coordinates
            zoom: 10 // Default zoom level
        })
    });
}
console.log(document.getElementById('map')); // Ensure this element exists
