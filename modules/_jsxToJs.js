const fs = require('fs')
const path = require('path')
const pathJoin = require('path').join

function _jsxToJs(relativePath, foldExport = 'dist') {
  debugger
  const filePath = pathJoin(
    module.parent?.path,
    relativePath.endsWith('.jsx') ? relativePath : relativePath + '.jsx'
  )

  let file = fs.readFileSync(filePath, {
    encoding: 'utf8',
  })

  // file = file.replace(/import ({?.*}?) from (.*)/g, 'const $1 = require($2)')
  file = file.replace('onClick={_add}', 'onclick={_add()}')
  file = file.replace(/(?<=.)(jsx)(?=['"])/g, `js`)
  // file = file.replace('export default', 'module.exports =')

  if (!file.includes('export default'))
    throw new Error(`Você não exportou nada default no arquivo: ${filePath}`)

  const newFileString = file
    .replace(/(return[\n\s]*\(?[\n\s]*)(<[\s\S]*\>)/g, '$1`$2`')
    .replace(/(?<=\[)[\n\s]*(<.*>)/g, '`$1`')
    .replace(
      /(?<![([<]|const[\s]|var[\s]|let[\s]|=[\s]|import[\s]){(.*?)}/g,
      '${$1}'
    )

  return newFileString
}

function getNameFileWithoutExt(filePath) {
  debugger
  const name = path.basename(filePath)
  const ext = path.extname(filePath)
  const nameWithoutExt = path.basename(name, ext)

  return nameWithoutExt
}

function getAllNamesFiles(foldInput, ext) {
  let all = fs.readdirSync(foldInput)

  all.map(pathName => {
    const name = path.basename(pathName)
    const ext = path.extname(pathName)
    const nameWithoutExt = path.basename(name, ext)

    return nameWithoutExt
  })
  return ext ? all.filter(v => v.endsWith(ext)) : all
}

function convertAllJsx(foldInput, foldExport) {
  const allJSXFilesNames = getAllNamesFiles(foldInput, 'jsx').map(v =>
    path.join(foldInput, v)
  )

  const allConvertedToJs = allJSXFilesNames.map(v => ({
    fileName: getNameFileWithoutExt(v),
    content: _jsxToJs(v),
  }))

  //save all

  for (let fileData of allConvertedToJs) {
    fs.writeFileSync(
      foldExport + '/' + fileData.fileName + '.js',
      fileData.content
    )
  }
}

function convertAllCss(foldInput, foldExport) {
  const allCSSFilesNames = getAllNamesFiles(foldInput, 'css')

  // .map(v =>
  //
  // )

  const getPath = fileName => {
    return pathJoin(module.parent?.path, foldInput, fileName)
  }

  const fileStrings = allCSSFilesNames.map(v => ({
    fileName: getNameFileWithoutExt(v),
    content: fs.readFileSync(getPath(v), { encoding: 'utf-8' }),
  }))

  for (let fileData of fileStrings) {
    fs.writeFileSync(
      foldExport + '/' + fileData.fileName + '.css',
      fileData.content
    )
  }
}

module.exports = { _jsxToJs, convertAllJsx, convertAllCss }
