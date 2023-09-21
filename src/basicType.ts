let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = 'blue';
color = 'red';
let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, My name is ${fullName},
I'll be ${age + 1} years old next month`;

// 배열

let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

// 튜플
let x: [string, number];
x = ['Hello', 10];
console.log(x);
console.log(x[0].substring(1));

enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;

let colorName: string = Color[2];
console.log(colorName);

// Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let prettySure: Object = 4;

let list3: any[] = [1, true, 'free'];
list3[1] = 100;

function warnUser(): void {
	console.log('This is my warning message');
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
	throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
	return error('Something failed');
}

function infiiteLoop(): never {
	while (true) {}
}

// 객체 Object

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
