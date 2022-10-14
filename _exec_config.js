const fs = require('fs')
const generateIndexHtml = require('./modules/generateIndexHtml')
const { convertAllJsx, convertAllCss } = require('./modules/_jsxToJs')

const pageTitle = 'Revolução'

const fullHtml = generateIndexHtml(pageTitle)

fs.writeFileSync('./dist/index.html', fullHtml)

function convertAll() {
  convertAllCss('./src', 'dist')
  convertAllJsx('./src', 'dist')
}

function listeningAll() {
  function read() {
    return fs
      .readdirSync('./src')
      .map(v => fs.readFileSync('./src/' + v, { encoding: 'utf-8' }))
  }
  let allFilesPrev = read()

  setInterval(() => {
    let newFiles = read()
    if (newFiles.length !== allFilesPrev.length) {
      console.log('mudou..')
      allFilesPrev = newFiles
      convertAll()
    }

    if (newFiles.some((_, i) => newFiles[i] !== allFilesPrev[i])) {
      console.log('mudou..')
      allFilesPrev = newFiles
      convertAll()
    }
  }, 800)
}

convertAll()

listeningAll()

// const express = require('express')

// const app = express()

// const domain = 'localhost'
// const port = 3333

// app.listen(port, domain)
// // app.listen(80, 'myapp.caio')

// app.get('/', (_, res) => {
//   res.sendFile('/index.html', { root: 'dist' })
// })

// var start =
//   process.platform == 'darwin'
//     ? 'open'
//     : process.platform == 'win32'
//     ? 'start'
//     : 'xdg-open'

// require('child_process').exec(start + ' http://' + domain + ':' + port)

console.log(`Rodando...`)
