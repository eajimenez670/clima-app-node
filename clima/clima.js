const axios = require('axios');

const getClima = async(lng, lat) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=fb77daf01464e6ecb94fbd6635d2a846`);
    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getClima
}