'use strict';

var _Spotify = require('./Spotify');

var _Spotify2 = _interopRequireDefault(_Spotify);

var _AlbumInfo = require('./AlbumInfo');

var _AlbumInfo2 = _interopRequireDefault(_AlbumInfo);

var _AlbumTracks = require('./AlbumTracks');

var _AlbumTracks2 = _interopRequireDefault(_AlbumTracks);

var _SearchTrigger = require('./SearchTrigger');

var _SearchTrigger2 = _interopRequireDefault(_SearchTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _SearchTrigger2.default)();

var album = _Spotify2.default.album.getAlbum('2i6nd4FV6y7K9fln6eelmR');
var albumInfo = document.getElementById('album-info');
var albumTracks = document.getElementById('album-tracks');

album.then(function (data) {
  return (0, _AlbumInfo2.default)(data, albumInfo);
}).then(function (data) {
  return (0, _AlbumTracks2.default)(data.tracks.items, albumTracks);
});