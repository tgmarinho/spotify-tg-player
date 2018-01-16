"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbums;

var _domain = require("domain");

function createMarkup(data) {
  return data.map(function (album) {
    return "\n    <div class=\"list-item\">\n      <img src=\"" + album.images[2].url + "\" alt=\"" + album.name + "\" class=\"list-image\">\n      <div class=\"list-description\">\n        <p class=\"list-title\">" + album.name + "</p>\n        <p class=\"list-subtitle\">" + album.artists[0].name + "</p>\n      </div>\n    </div>";
  }).join('');
}

function renderAlbums(data, element) {
  var markup = createMarkup(data);

  element.innerHTML = markup;
}