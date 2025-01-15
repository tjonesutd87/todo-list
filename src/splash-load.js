import horse from './images/horse-2795105_640.png';
import logo from './images/todoerer-logo.png';
import moon from './images/moon-4917183_640.png';
import grass from './images/hq720.png';

export function splashPageLoader() {
    //  declare variables to create page elements
    const splashContainer = document.createElement('div');
    const horseImg = document.createElement('img');
    const moonImg = document.createElement('img');
    const logoImg = document.createElement('img');
    const grassImg = document.createElement('img');
    const text = document.createElement('p');

    document.body.appendChild(splashContainer);
    splashContainer.appendChild(grassImg);
    splashContainer.appendChild(horseImg);
    splashContainer.appendChild(moonImg);
    splashContainer.appendChild(logoImg);
    splashContainer.appendChild(text);


    //  set element image sources and ids
    splashContainer.id = 'splash-container';
    horseImg.src = horse;
    horseImg.id = 'horse';
    horseImg.width = 150;
    moonImg.src = moon;
    moonImg.id = 'moon';
    moonImg.width= 300;
    logoImg.src = logo;
    logoImg.id = 'logo';
    logoImg.width = 600;
    logoImg.height = 457;
    grassImg.src = grass;
    grassImg.id = 'grass';
    text.textContent = 'Press A to Start';
    text.id = 'start-text';

}