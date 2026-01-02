//#region commonjs
/**
 * 1. 可以使用 __filename __dirname
 * 2. 使用 require module.exports 进行导入导出
 * */
// console.log(__filename)
//#endregion

//#region esm

import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename)
console.log(__dirname)

//#endregion

