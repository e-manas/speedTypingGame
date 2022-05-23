const word = document.querySelector('#word');
const text = document.getElementById('text');
const score = document.querySelector('#score');
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
	'admit',
	'dragstore',
	'loving',
	'fantastic',
	'confiqure',
];

let randomWord;
let score = 0;
let time = 10;