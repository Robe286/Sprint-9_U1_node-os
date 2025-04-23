/* crear objeto con los datos:
    - Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
    - Memoria Total y Memoria Libre tendrá que estar en MB.
    Mira que dato dá y qué cáculo debes hacer.
*/

const os = require('node:os')

function osInformation () {
    return {
        Nombre: `${os.platform()}`,
        Tipo: `${os.type()}`,
        Version: `${os.version()}`,
        Arquitectura: `${os.arch()}`,
        CPUs: `${os.cpus().length}`,
        MemoriaTotal: `${Math.round(os.totalmem() / 1024 /1024)} MB`,
        MemoriaLibre: `${Math.round(os.freemem() / 1024 / 1024)} MB`,
    }
}
// También se podría crear otro módulo que contenga una función que haga la conversión.

module.exports = osInformation
