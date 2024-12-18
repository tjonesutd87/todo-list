import horse from './images/horse-2795105_640.png';
import logo from './images/todoerer-logo.png';
import moon from './images/moon-4917183_640.png';

export function splashPageLoader() {
    //  declare variables to create page elements
    const splashContainer = document.createElement('div');
    const horseImg = document.createElement('img');
    const moonImg = document.createElement('img');
    const logoBtn = document.createElement('button');
    const logoImg = document.createElement('img');
    const grass = document.createElement('div');

    document.body.appendChild(splashContainer);

    splashContainer.appendChild(horseImg);
    splashContainer.appendChild(moonImg);
    splashContainer.appendChild(logoBtn);
    logoBtn.appendChild(logoImg);
    splashContainer.appendChild(grass);

    //  set element image sources and ids
    splashContainer.id = 'splash-container';
    horseImg.src = horse;
    horseImg.id = 'horse';
    horseImg.width = 300;
    moonImg.src = moon;
    moonImg.id = 'moon';
    moonImg.width= 300;
    logoImg.src = logo;
    logoImg.id = 'logo';
    logoImg.width = 600;
    logoImg.height = 457;
    grass.id = 'grass';



}