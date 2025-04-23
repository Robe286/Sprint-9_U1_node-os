// networkInterfaces()
// - Interfaz
// - Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.
const os = require('node:os');

function network () {
    const interfaces = os.networkInterfaces();
    const redes = {}

    for(interface in interfaces) {
        redes[interface] = interfaces[interface].map(iface => {
            return {
                Familia: iface.family,
                Dirección: iface.address,
                Interno: iface.internal
            }
        })
    }
    return redes

}

module.exports = network
console.log(network())