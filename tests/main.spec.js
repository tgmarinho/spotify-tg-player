import { expect } from 'chai';
import spotify from '../src/Spotify';


describe('Spotify TG', () => {
    it('should be an object', () => {
        expect(spotify).to.be.a.object;
    });
    
    it('should have searh methods', () => {
        expect(spotify.search).to.be.exist;
    });

    it('should have album methods', () => {
        expect(spotify.album).to.be.exist;
    });
});
