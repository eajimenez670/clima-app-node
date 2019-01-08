const argv = require('./config/yargs').yargs;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLngLat(direccion);
        let temp = await clima.getClima(coors.lng, coors.lat);
        return `El clima en ${coors.direccion} es de ${temp} C`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err));