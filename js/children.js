import {$} from './core.js';

let playBtn = $('#play-btn');
let play = $('#play');
let soon = $('#soon');
let closeSoon = $('#close-soon');

playBtn.onclick = () => {
	showGame()
}

play.onclick = () => {
	showGame()
}

closeSoon.onclick = () => {
	soon.classList.add('close');
}

let showGame = () => {
	let isClose = soon.classList.contains('close');
	if (isClose) {
		soon.classList.remove('close');
	}
}