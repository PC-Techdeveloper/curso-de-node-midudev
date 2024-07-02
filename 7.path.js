// Natives modules
const path = require('node:path')

//Separador de carpetas según S.0
// console.log(path.sep)

//Unir rutas con path.join -> Windows
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

//Obtener el nombre de la ruta con path.basename
const base = path.basename('/tmp/midu-secret-files/passwords.txt')
console.log(base)

//Obtener el nombre del fichero quitando la extensión
const fileName = path.basename('/tmp/midu-secret-files/passwords.txt', '.txt')
console.log(fileName)

//Obtener la extensión de la ruta con path.extname
const extension = path.extname('/my.super.image.image.jpg')
console.log(extension)
