import { buildMap, showMapMarkers } from './map.js'
import { currentYear } from './utils.js'
import { changeColorMap, splashScreen } from './dom.js'

export const App = () => {
    const path = window.location.pathname;
    if(!path.includes("/info/")) {
        const map = buildMap();
        showMapMarkers(map, path);
        changeColorMap();
    }
    currentYear();
    splashScreen();
};