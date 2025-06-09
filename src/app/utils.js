export const currentYear = () => {
    const cdate = new Date();
    document.getElementById('current-year').innerHTML = `© ${cdate.getFullYear()}`
}

// ----------------------------------------------------

// Set lat and lng (helper)
export const setLatLng = (lat, lng) => L.latLng(lat, lng);
