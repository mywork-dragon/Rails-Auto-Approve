/*$(document).on('turbolinks:load', function () {
  $('#theme_select').on('change', function(event) {
    const theme = $(event.target).find('option:selected').text()
    $.get(`/admin/themes/${theme}/fields`).then(function(result) {
      var el = $('#fields')
      el.html('')
      Object.keys(result).forEach(function (key) {
        el.append(`
          <p class="xl mb-2 tracking-wide">${key}</p>
          <div class="flex md:flex-nowrap flex-wrap items-center justify-between mb-2">
            <div class="md:w-1/2 w-full md:mb-0 mb-1 md:mr-6">
              <input
                type="text"
                name="landing[config][${key}]"
                value="${result[key] || ''}"
                class="w-full px-5 py-3 text-xl outline-none focus:outline-none border-custom-color1 border border-solid rounded-lg mb-2 focus:text-black"
              >
            </div>
          </div>
        `)
      })
    })
  })
})  */
import axios from "axios";

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

    axios({
      method: 'GET',
      url: `/admin/themes/${theme}/fields`
    }).then(result => {
      let el = document.getElementById("fields");

      el.innerHTML = ''
      Object.keys(result.data).forEach(function (key) {
        el.insertAdjacentHTML("beforeend",`
          <div class="mb-10">
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
    });
  });

})