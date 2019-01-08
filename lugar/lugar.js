const axios = require('axios');

const getLugarLngLat = async(direccion) => {
    let encodeURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lng: coors.lng,
        lat: coors.lat
    }
}

module.exports = {
    getLugarLngLat
}