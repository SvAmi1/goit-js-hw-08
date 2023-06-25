import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(getCurrentTime, 1000));

setStorage();

function getCurrentTime(currentTime) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime.seconds));
}

function setStorage() {
const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
player.setCurrentTime(JSON.parse(savedTime));
}
}