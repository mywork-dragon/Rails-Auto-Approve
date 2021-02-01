
require("@rails/ujs").start()
require("turbolinks").start()

import "stylesheets/landing-1";

global.$ = require("../scr/themes/jquery.min")

require("../scr/themes/material.min")
require("../scr/themes/rangeslider.min")
// require("../scr/themes/flatpickr.min")
require("../scr/themes/owl.carousel.min")
require("../scr/themes/range-slider")
require("../scr/themes/jquery.collapsable")
require("../scr/themes/jquery.sweet-dropdown.min")
require("../scr/themes/footer")
require("../scr/themes/custom")
require("../scr/themes/get-owl-slider")
require("../scr/themes/step-quote-custom")
// import "../scr/flatpickr"
import "owl.carousel/dist/assets/owl.carousel.min.css";
global.mask = require('jquery-mask-plugin');


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)