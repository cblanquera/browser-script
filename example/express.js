const express = require('express')
const bs = require('../src')

const app = express()

app.use(bs).listen(3000)

app.get('/foo', function(req, res) {
  //you can use browser references inside here
  const client = function(str1, str2) {
    window.alert(str1)
    document.getElementById('results').innerHTML = str2[0]
  }
  
  //you can pass variables
  res.end(bs.evaluate(client, 'hello', ['World']))
})

app.get('/', function(req, res) {
  res.end(`<!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <div id="results"></div>
        <script type="text/javascript" src="/browser/script.js"></script>
        <script type="text/javascript">bs.fetch('/foo')</script>
      </body>
    </html>`
  )
})