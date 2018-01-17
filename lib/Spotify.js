'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spotifyWrapperWj = require('spotify-wrapper-wj');

var _spotifyWrapperWj2 = _interopRequireDefault(_spotifyWrapperWj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spotify = new _spotifyWrapperWj2.default({
  token: 'BQBEqTHs8vDS7zDNyuWZJfaNiiiTGzVCSeu6xjZ6Om4t'
}); // to import a specific method
exports.default = spotify;