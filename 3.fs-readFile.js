const fs = require('node:fs')

// Síncrono

//Leer un archivo
const text = fs.readFileSync('./archivo.txt', 'utf8')

console.log(text)
