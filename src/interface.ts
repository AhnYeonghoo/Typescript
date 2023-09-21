function printLabel(labeldObj: { label: string }) {
	console.log(labeldObj.label);
}

let myObj = { size: 10, label: 'size 10 object' };
printLabel(myObj);

interface LabeldValue {
	label: string;
}

interface SquareConfig {
	color?: string;
	width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	let newSquare = { color: 'white', area: 100 };
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let mySquare = createSquare({ color: 'black' });

interface SquareConfig2 {
	color?: string;
	width?: number;
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
	let newSquare = { color: 'white', area: 100 };
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}

	return newSquare;
}

interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = { x: 10, y: 20 };

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
	let result = source.search(subString);
	return result > -1;
};
