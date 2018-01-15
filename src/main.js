import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');
const albumTracks = document.getElementById('album-tracks');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

albums
  .then(data => renderAlbums(data.albums.items, albumList))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
