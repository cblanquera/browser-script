const http = require('http')
const bs = require('../src')

const server = http.createServer(function(req, res) {
  if (bs(req, res)) return
  if (req.url === '/foo') {
    //you can use browser references inside here
    const client = function(str1, str2) {
      window.alert(str1)
      document.getElementById('results').innerHTML = str2[0]
    }
    
    //you can pass variables
    res.end(bs.evaluate(client, 'hello', ['World']))
  } else if (req.url === '/') {
    res.end(`<!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div id="results"></div>
          
          <script type="text/javascript" src="/browser/script.js"></script>
          
          <script type="text/javascript">
          //...
          bs.import('/foo')
          //...
          </script>
        </body>
      </html>`
    )
  } 
})

server.listen(3000)