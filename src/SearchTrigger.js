import spotify from './Spotify';
import renderAlbums from './AlbumList';
import search from 'spotify-wrapper-wj/lib/search';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');


// const albums = spotify.search.albums('Incubus');

// albums
//   .then(data => renderAlbums(data.albums.items, albumList));

export default function searchEnterTrigger() {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        spotify.search.albums(searchInput.value)
            .then(data => renderAlbums(data.albums.items, albumList));
    });
}