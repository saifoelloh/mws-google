const mymap = L.map('my-house').setView([-6.976753, 110.459721], 15);
const locate = [-6.977083, 110.45951];

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
let marker = L.marker(locate).addTo(mymap);
marker.bindPopup('My home sweet home');
