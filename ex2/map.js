
let myMap = L.map('myMap').setView([41.387241, 2.170004], 16);

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     {
         maxZoom: 18
     }).addTo(myMap);

let popup = L.popup();

myMap.on('click', function (e){

popup
    .setLatLng(e.latlng) // Sets the geographical point where the popup will open.
    .setContent("<b>Mis coordenades son:</b><br> " + "Lat: " + e.latlng.lat.toString() + " Lng: " +  e.latlng.lng.toString()) // Sets the HTML content of the popup.
    .openOn(myMap) // Adds the popup to the map and close the previous one. 
myMap.setView(e.latlng, 18);

});

