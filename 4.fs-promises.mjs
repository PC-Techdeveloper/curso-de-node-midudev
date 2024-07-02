// The promises are Asynchronous
//Transform of callback to promise
// const { promisify } = require('node:util') // With case natives
// //Create version of promisify that returns a promise
// const readFilePromise = promisify(fs.readFile)
const fs = require('node:fs/promises')

//Leer un archivo
console.log('Leyendo el primer archivo...')

// Async -> readFile -> Callback (Funciones que se ejecutan cuando una tarea ha terminado)
fs.readFile('./archivo.txt', 'utf-8')
  .then((text) => console.log('Primer texto:', text))

console.log(' --> Hacer cosas mientras lee el archivo...')
console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
  .then((secondText) => {
  console.log('Segundo texto:', secondText)
})
