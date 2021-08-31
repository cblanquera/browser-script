let i = 0;
module.exports = function(callback) {
  return `<script id="__browser-script__-${++id}" type="text/javascript">(${callback.toString()})();`
  + `document.getElementById('__browser-script__${id}').remove();</script>`;
}