// https://codepen.io/arriolaleo/pen/gOvGooz
const word = document.querySelector('#word');
const text = document.getElementById('text');
const scoreEl = document.querySelector('#score');
const timeEl = document.getElementById('time');
const endGameEl = document.querySelector('.end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultyLevel = document.getElementById('difficulty');

const words = [
	'sigh',
	'tense',
	'airplane',
	'ball',
	'pies',
	'juice',
	'warlike',
	'badass',
	'north',
	'dependent',
	'steer',
	'silver',
	'highfalutin',
	'superficial',
	'quince',
	'eight',
	'feeble',
	'admire',
	'dragstore',
	'loving',
	'fantastic',
	'confiqure',
	'response',
	'glider',
	'speaker',
	'family',
	'grandparent',
	'reactor',
	'tolerance',
	'romance',
	'character',
	'graph',
	'shareable',
	'definition',
	'pick',
	'hall',
	'color',
];

let randomWord;
let score = 0;
let time = 5; //! 10
let intervalId;
let difficulty = 'easy';
difficultyLevel.addEventListener("change", function (e) {
	difficulty = e.target.value;
	startTheGame();
})

function getWordRandomly() {
	// console.log(Math.floor(Math.ra	ndom() * words.length))
	let wordsFiltered;

	if (difficulty === 'easy') {
		wordsFiltered = words.filter(el => {
			if (el.length < 6) return el;
		})
	}
	if (difficulty === 'medium') {
		wordsFiltered = words.filter(el => {
			if (el.length >= 6 && el.length < 8) return el;
		})
	}
	if (difficulty === 'hard') {
		wordsFiltered = words.filter(el => {
			if (el.length >= 8) return el;
		})
	}
	console.log(wordsFiltered)
	// const wordsFiltered = word.filter(el => el);
	randomWord = wordsFiltered[Math.floor(Math.random() * wordsFiltered.length)];
	// console.log(randomWord);
}

function startTheGame() {
	if (intervalId) {
		clearInterval(intervalId);
	}
	text.value = "";
	time = 5;  //! 10
	endGameEl.style.display = 'none';

	getWordRandomly();
	word.innerText = randomWord;
	startCounter();
}
startTheGame();


function startCounter() {
	intervalId = setInterval(() => {
		time--;
		console.log(time);
		if (time === 0) {
			clearInterval(intervalId);
			gameOver();
		}
		timeEl.innerHTML = time;
	}, 1000);
}

function gameOver() {
	console.log('game over');
	endGameEl.style.display = 'block';
	const gameOverBtn = document.createElement('button');
	gameOverBtn.innerText = 'Restart the GAME';
	gameOverBtn.addEventListener('click', function () {
		startTheGame();
		endGameEl.innerHTML = "";
	})
	endGameEl.appendChild(gameOverBtn);
}

text.addEventListener('keyup', function (e) {
	if (e.target.value === randomWord) {
		score++;
		scoreEl.innerText = score;
		startTheGame();
	}
})

settingsBtn.addEventListener('click', function () {
	settings.classList.toggle("hide");
})
