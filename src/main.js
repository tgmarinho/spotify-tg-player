import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albums = spotify.search.albums('Diante do Trono');
const albumList = document.getElementById('album-list');
const albumTracks = document.getElementById('album-tracks');

albums
  .then(data => renderAlbums(data.albums.items, albumList))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
