/* crear objeto con los datos:
    - Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
    - Memoria Total y Memoria Libre tendrá que estar en MB.
    Mira que dato dá y qué cáculo debes hacer

    **Ejemplo de output:**
Nombre: darwin
Tipo: Darwin
Versión: Darwin Kernel Version 23.1.0: Mon Oct  9 21:27:27 PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64
Arquitectura: x64
CPUs: 12
MemoriaTotal: 16384.00 MB
MemoriaLibre: 370.71 MB
*/
const os = require('node:os')
console.log(os.version())
//console.log(os.version())
//console.log(os.platform())
//console.log(os.cpus().length)
const pcData = {
    Nombre: '',
    Tipo: `${os.type()}`,
    Versión: '',
    Arquitectura: `${os.arch()}`,
    CPUs: `${os.cpus().length}`,
    MemoriaTotal: '',
    MemoriaLibre: '',
}