let mymap = L.map('mapid').setView([-6.982259, 110.409151], 15);

L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken:
      'pk.eyJ1Ijoic2FpZm9lbGxvaCIsImEiOiJjam0wZnY4bDEwYWhzM3ByNTZoejAyOTI4In0.lQHwm97ciEN7s-l9qNRLDA',
  },
).addTo(mymap);
let marker = L.marker([-6.982259, 110.409151]).addTo(mymap);
let circle = L.circle([-6.982259, 110.409151], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 150,
}).addTo(mymap);
marker.bindPopup('This my beloved campus!').openPopup();
