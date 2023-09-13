import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VPCT_KEY = "videoplayer-current-time"; //робимо константу для розміщення в коді
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe); // створюємо новий плеєр і взаємодіємо з ним

const onPlay = function (event) {
    localStorage.setItem(VPCT_KEY, event.seconds);  //зберігаємо час(місце) відтворення відео
};

player.on('timeupdate', throttle(onPlay, 1000)); //відстежуємо подію оновлення часу, викликаємо функцію onplay і ставимо інтервал 1сек

const setTime = localStorage.getItem(VPCT_KEY);  //отримали час(місце) відтворення

player.setCurrentTime(setTime || 0);  //передали для відтворення || якщо локал порожній буде 0сек








