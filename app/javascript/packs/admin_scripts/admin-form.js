window.humanize = function (str) {
  return str
      .replace(/^[\s_]+|[\s_]+$/g, '')
      .replace(/[_\s]+/g, ' ')
      .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
}


document.addEventListener("DOMContentLoaded", function () {
  var inputElement = document.getElementById("theme_select");

  inputElement.addEventListener("change", function(event){
    let options = event.target.options[event.target.options.selectedIndex]
    const theme = options.parentNode.value
    
    return fetch(`/admin/themes/${theme}/fields`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((result) => {
      let el = document.getElementById("fields");

      el.innerHTML = ''
      Object.keys(result).forEach(function (key) {
        el.insertAdjacentHTML("beforeend",`
          <div class="mb-10">
            <label>
              ${humanize(key)}
            </label>
            <input
              type="text"
              name="landing[config][${key}]"
              value="${result[key] || ''}"
              class="w-full border border-gray12 rounded-lg px-6 py-2"
              placeholder=${key}
            >
          </div>
        `)
      })
    })
    .catch((error) => {
      console.error(error);
    });

  });

})