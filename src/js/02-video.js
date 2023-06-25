import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(getCurrentTime, 1000));

setStorage();

function getCurrentTime(ev) {
    const currentTime = ev.seconds;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime));
}

function setStorage() {
const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
player.setCurrentTime(JSON.parse(savedTime));
}
}