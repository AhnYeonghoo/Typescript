function add(x: number, y: number): number {
	return x + y;
}

let myAdd = function (x: number, y: number): number {
	return x + y;
};

let myAdd2: (x: number, y: number) => number = function (
	x: number,
	y: number
): number {
	return x + y;
};

let myAdd3: (baseValue: number, increment: number) => number = function (
	x: number,
	y: number
): number {
	return x + y;
};

function buildName(firstName: string, lastName?: string): string {
	return firstName + ' ' + lastName;
}

let result1 = buildName('Bob');
console.log(result1);

interface Card {
	suit: string;
	card: number;
}

interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}

let deck2: Deck = {
	suits: ['hearts', 'spades', ' clubs', 'diamonds'],
	cards: Array(52),
	createCardPicker: function (this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);

			return { suit: this.suits[pickedCard], card: pickedCard % 13 };
		};
	},
};

let cardPicker = deck2.createCardPicker();
let pickedCard = cardPicker();

console.log(`card ${pickedCard.card} of ${pickedCard.suit}`);

interface UIElement {
	addClickListener(onclick: (this: void, e: Event) => void): void;
}

// Overloads

let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };

function pickCard(x): any {
	// 인자가 배열 또는 객체인지 확인
	// 만약 그렇다면, deck이 주어지고 card를 선택합니다.
	if (typeof x == 'object') {
		let pickedCard = Math.floor(Math.random() * x.lenght);
		return pickedCard;
	}
	// 그렇지 않다면, 그냥 card를 선택합니다.
	else if (typeof x == 'number') {
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}
