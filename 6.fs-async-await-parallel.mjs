import { readFile } from 'node:fs/promises'

//Create the parallel version of readFile

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Primer texto:', text)
  console.log('Segundo texto:', secondText)
})


//Thrid foramt: Parallel
//Leer un archivo
const text = await readFile('./archivo.txt', 'utf-8')
console.log('Primer texto:', text)
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto:', secondText)
