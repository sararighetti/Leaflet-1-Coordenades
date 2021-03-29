
let iconMarker = L.Icon.extend({
    options:{
        iconSize:[38, 45], iconAnchor: [30, 40], popupAnchor:[-5,-26]
    }
})
let myMarker = new iconMarker({ iconUrl:'marker.png'})
let map = L.map('myMap').setView([41.387241, 2.170004], 17);

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

let marker = L.marker([41.387049, 2.166036],{icon:myMarker}).addTo(map);

marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterràneo<br>Carrer de Balmes, 16, 08007 Barcelona"); 

