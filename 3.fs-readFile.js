// Síncrono -> readFileSync (⚠️ Solo para lectura)
//Leer un archivo

// Async -> readFile -> Callback (Funciones que se ejecutan cuando una tarea ha terminado)

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <- Ejecuta este callback
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})
