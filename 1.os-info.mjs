// Pasar de require a import de Node.js

import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo: ')
console.log('====================================')

console.log('Nombre del sistema operativo: ', platform())
console.log('Versión del sistema operativo: ', release())
console.log('Arquitectura del sistema operativo: ', arch())
console.log('CPUs del sistema operativo: ', cpus().length) // <- Escalar procesos en Node
console.log('Memoria disponible del sistema operativo: ', freemem() / 1024 / 1024)
console.log('Memoria total del sistema operativo: ', totalmem() / 1024 / 1024)
console.log('uptime del sistema operativo: ', uptime() / 60 / 60)
