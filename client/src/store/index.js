import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#C2B280',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo.png',
    fullDecal: './logo.png',
});

export default state;