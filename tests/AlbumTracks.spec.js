import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumTracks from '../src/AlbumTracks';
<<<<<<< HEAD
import convertToHumanTime from '../src/ConvertToHumanTime';
=======
>>>>>>> d151bb1782b5ff2da6fa71d4250ac3a0c9489528

describe('AlbumTracks', () => {
  const data = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const data2 = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    },
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
<<<<<<< HEAD
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">${convertToHumanTime(238733)}</p>
=======
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">238733</p>
>>>>>>> d151bb1782b5ff2da6fa71d4250ac3a0c9489528
    </div>`;

  const markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
<<<<<<< HEAD
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">${convertToHumanTime(238733)}</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">${convertToHumanTime(238733)}</p>
=======
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">238733</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">238733</p>
>>>>>>> d151bb1782b5ff2da6fa71d4250ac3a0c9489528
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when more than 1 item', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> d151bb1782b5ff2da6fa71d4250ac3a0c9489528
