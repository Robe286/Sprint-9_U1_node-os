/* crear objeto con los datos:
    - Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
    - Memoria Total y Memoria Libre tendrá que estar en MB.
    Mira que dato dá y qué cáculo debes hacer.
*/

const os = require('node:os')
//console.log(os.freemem())
//console.log(os.version())
//console.log(os.platform())
//console.log(os.cpus().length)
//console.log(`Memoria Total: ${Math.round(os.totalmem() / 1024 /1024)} MB`)
//console.log(`Memoria libre: ${Math.round(os.freemem() / 1024 / 1024)} MB`)
const pcData = {
    Nombre: `${os.type()}`,
    Tipo: `${os.type()}`,
    Version: `${os.version()}`,
    Arquitectura: `${os.arch()}`,
    CPUs: `${os.cpus().length}`,
    MemoriaTotal: `${Math.round(os.totalmem() / 1024 /1024)} MB`,
    MemoriaLibre: `${Math.round(os.freemem() / 1024 / 1024)} MB`,
}

export default pcData;
//console.log(pcData)