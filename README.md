# browser-script

Run client scripts from your server framework *(A meme project)*.

## Express Example

```js
//on your server
const evaluate = require('browser-script');

app.get('/foo', (req, res) => {
  const browserScript = evaluate(function() {
    window.alert('hello')
    document.getElementById('root').innerHTML = 'Hello'
  })
  res.end(browserScript)
})
```

```js
//on your client
async () => {
  document.body.appendChild(await fetch('/foo'))
}
```