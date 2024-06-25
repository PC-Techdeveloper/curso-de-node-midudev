//Aplicación para mostrar el sistema de archivos (file system) <- Extensión de archivos

// Siempre utilziar los prefijos de Node.js (node:)

const fs = require('node:fs')

// Síncrono
// Información del sistema de archivos
const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // <- Verifica si es un archivo
  stats.isDirectory(), // <- Verifica si es un directorio
  stats.isSymbolicLink(), // <- Verifica si es un enlace simbólico
  stats.size // <- Tamaño del archivo
)
