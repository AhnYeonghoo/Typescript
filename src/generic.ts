class Model<T> {
	private _data: T[] = [];

	constructor(data: T[] = []) {
		this._data = data;
	}

	get data(): T[] {
		return this._data;
	}

	add(item: T): void {
		this._data.push(item);
	}

	remove(index: number): void {
		this._data.splice(index);
	}

	item(index: number): T {
		return this._data[index];
	}

	clear(): void {
		this._data = [];
	}
}
