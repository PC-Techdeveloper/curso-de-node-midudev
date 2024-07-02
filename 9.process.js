//Objeto process <- Object global

//Información actual
//Argumentos de entrada -> Array
// console.log(process.argv)

//Controlar el proceso y su sálida
// process.exit(1)

//Controlas eventos del proceso
// process.on('exit', () => {
//   //Limpiar los recursos
//   console.log('El proceso ha finalizado')
// })

//Current working directory -> Cual es el directorio actual
console.log(process.cwd())

//Platform
//Variables de entorno
console.log(process.env.PEPITO)
