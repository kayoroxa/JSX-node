const fs = require('fs')
const generateIndexHtml = require('./modules/generateIndexHtml')
const { convertAllJsx, convertAllCss } = require('./modules/_jsxToJs')

const pageTitle = 'Revolução'

const fullHtml = generateIndexHtml(pageTitle)

fs.writeFileSync('./dist/index.html', fullHtml)

convertAllCss('./src', 'dist')
convertAllJsx('./src', 'dist')

// const express = require('express')

// const app = express()

// app.listen(80, 'myapp.caio')

// app.get('/', (_, res) => {
//   res.send(fullHtml)
// })

// console.log(`Rodando...`)
