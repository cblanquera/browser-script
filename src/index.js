module.exports = function(req, res, next) {
  const shouldEnd = req.method === 'GET' && req.url === '/browser/script.js'
  if (shouldEnd) res.end(`window.bs={fetch:async function(href){var s = document.createElement('script');s.text = await (await fetch(href)).text();s.onload = function() {s.remove()};document.body.appendChild(s)}}`)
  if (typeof next === 'function') next()
  return shouldEnd
}

module.exports.evaluate = function(callback, ...args) {
  return `;(${callback.toString()}).apply(null, ${JSON.stringify(args)});`
}