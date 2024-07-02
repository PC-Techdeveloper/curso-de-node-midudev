//One format: Pass to commonJS to Module
// import { readFile } from 'node:fs/promises'

//LEYENDO UN ARCHIVO
// console.log('Leyendo el primer archivo...')
// const text = await readFile('./archivo.txt', 'utf-8')
// console.log('Primer texto:', text)

// console.log(' --> Hacer cosas mientras lee el archivo...')

// console.log('Leyendo el segundo archivo...')
// const secondText = await readFile('./archivo2.txt', 'utf-8')
// console.log('Segundo texto:', secondText)

// Second format: File old way
// IIFE -> IIFE (Immediately Invoked Function Expression)

// ASINCRONO SECUENCIAL
const { readFile } = require('node:fs/promises')
;(async () => {
  console.log('Leyendo el primer archivo...')
  const text = await readFile('./archivo.txt', 'utf-8')
  console.log('Primer texto:', text)

  console.log(' --> Hacer cosas mientras lee el archivo...')

  console.log('Leyendo el segundo archivo...')
  const secondText = await readFile('./archivo2.txt', 'utf-8')
  console.log('Segundo texto:', secondText)
})()
