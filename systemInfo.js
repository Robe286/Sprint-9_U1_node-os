const osInformation = require('./osModule')
//const network = require('./networkModule')

const osInfo = osInformation()

//console.log(osInformation())
//console.log(network())

Object.entries(osInfo).forEach(([clave,valor]) => {
    console.log(`${clave}: ${valor}`)
})