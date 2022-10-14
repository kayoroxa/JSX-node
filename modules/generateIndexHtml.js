module.exports = function generateIndexHtml(pageTitle = 'Hello Word') {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${pageTitle}</title>
      <link rel="stylesheet" href="./index.css" />
    </head>
    <body>
      <div class="app"></div>
      <script type="module">
        import index from './index.js'
        document.querySelector('.app').innerHTML = index()
      </script>
    </body>
  </html>
  `
}
