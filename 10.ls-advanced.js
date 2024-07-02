const fs = require('fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`No se pudo leer el directorio: ${folder}`)
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) //Información del archivo
    } catch {
      console.error(`No se pudo leer el archivo: ${filePath}`)
      process.exit(1)
    }
    const isDirectory = stats.isDirectory()
    const fyleType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fyleType} ${file.padEnd(20)} ${fileSize.padStart(10)} ${fileModified}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo)) //Mostrar la información
}

ls(folder)
