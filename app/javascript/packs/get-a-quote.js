require("@rails/ujs").start()
// require("turbolinks").start()

import "stylesheets/get-a-quote";
global.$ = require("../scr/themes/jquery.min")
require("../scr/themes/material.min")
require("../scr/themes/mdl-selectfield.min")
// require("../scr/themes/getmdl-select) //this is being imported from public, as script
require("../scr/themes/rangeslider.min")
require("../scr/themes/range-slider")
require("../scr/themes/jquery.collapsable")
require("../scr/themes/footer")
// require("../scr/themes/flatpickr.min")
// import "../scr/themes/flatpickr"
require("../scr/themes/step-quote-custom")
require("../scr/themes/custom")
global.mask = require('jquery-mask-plugin');

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)
