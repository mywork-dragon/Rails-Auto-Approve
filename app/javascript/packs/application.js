// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()


import "stylesheets/application"

global.$ = require("jquery")

require("jquery.collapsable/dist/jquery.collapsable")
require("sweet-dropdown/dist/dev/jquery.sweet-dropdown")
import "rangeslider.js/dist/rangeslider"
import "rangeslider.js/dist/rangeslider.css"
import owlCarousel from "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";

import "../scr/get-owl-slider"
import "../scr/custom"
import "../scr/range-slider"
import "../scr/footer"

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)