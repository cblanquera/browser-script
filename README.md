# HTTP Browser Script

A Node HTTP plugin that allows you to send browser scripts from the server.
*(A fun meme project)*

## Install

```bash
$ npm i http-browser-script --save
```

## Express Example

```js
const express = require('express')
const bs = require('http-browser-script')

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
```

```html
<!-- On your client -->
<div id="results"></div>
<script type="text/javascript" src="/browser/script.js"></script>
<script type="text/javascript">
//...
bs.import('/foo')
//...
</script>
```

## HTTP Example

```js
const http = require('http')
const bs = require('browser-script')

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
  }
})

server.listen(3000)
```

You can see more [examples](./examples) in this repo.