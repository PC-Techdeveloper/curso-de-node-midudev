// .js -> Por defecto utiliza CommonJS
// .mjs -> Para utilizar ES Modules
// .cjs -> Para utilizar CommonJs

// Sistema de Importación de módulos moderno <- ES Modules

import { sum, sub, mul } from './sum.mjs'

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(mul(1, 2))
