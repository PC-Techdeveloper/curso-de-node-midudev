//Módulos Nativos en node.js <- Biblioteca de módulos nativos (Library)

/*
os -> Muestra información del sistema operativo de tu equipo.
*/

//Aplicación para mostrar información del sistema operativo

const os = require('node:os')

console.log('Información del sistema operativo: ')
console.log('====================================')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.release())
console.log('Arquitectura del sistema operativo: ', os.arch())
console.log('CPUs del sistema operativo: ', os.cpus().length) // <- Escalar procesos en Node
console.log('Memoria disponible del sistema operativo: ', os.freemem() / 1024 / 1024)
console.log('Memoria total del sistema operativo: ', os.totalmem() / 1024 / 1024)
console.log('uptime del sistema operativo: ', os.uptime() / 60 / 60)
