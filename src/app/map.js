import { setLatLng, isEngLeng } from './utils.js'
import { placesDataEn, placesDataEs } from './places.js'
import { attMarker } from './dom.js'

// Map Initialization
export const buildMap = () => {
  // Salou > Cap Salou, Vila Seca > La pineda (Locations)
  const lat = 41.0727052,
        lng = 1.1599222;
  // Map
  const map = L.map('map', {
    center: setLatLng(lat, lng),
    zoomControl: false,
    minZoom: 13,
    maxZoom: 16,
  }).setView(setLatLng(lat, lng), 13);

  // Tile
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright" title="OpenStreetMap">OpenStreetMap</a>',
  }).addTo(map);
  
  return map;
};

// ----------------------------------------------------

// Show markers
export const showMapMarkers = (map, loc) => {
  // Set icon
  const mapIcon = L.icon({
      iconUrl: '../img/map-icon.svg',
      iconSize: [25, 41],
      iconAnchor: [16, 35],
      popupAnchor: [-3, -28]
  });
  
  // Places Data
  let placesData = isEngLeng(loc) ? placesDataEn : placesDataEs;

  placesData.forEach((p) => {
    L.marker(setLatLng(p.lat, p.lng),{icon: mapIcon})
      .addTo(map)
      .bindPopup(`${p.popup}`)
      .on('click', () => {
        if (p.details) {
          document.getElementById('info').innerHTML = `${p.details}`;
        }
      });
  });

  attMarker();
};