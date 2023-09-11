import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe); // створюємо новий плеєр і взаємодіємо з ним

const onPlay = function (event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);  //зберігаємо час(місце) відтворення відео
};

player.on('timeupdate', throttle(onPlay, 1000)); //відстежуємо подію оновлення часу, викликаємо функцію onplay і ставимо інтервал 1сек

const setTime = localStorage.getItem("videoplayer-current-time");  //отримали час(місце) відтворення

player.setCurrentTime(setTime);  //передали для відтворення








