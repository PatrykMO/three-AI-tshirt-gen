import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#C2B280',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;