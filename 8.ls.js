const fs = require('node:fs/promises')

fs.readdir('.') //Lista de los ficheros
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
      return
    }
  })
