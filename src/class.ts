import { each } from './utils';

class Buttons {
	public el: NodeList;

	constructor(el: NodeList) {
		this.el = el;
		this._init();
	}

	private _init() {
		each(this.el, (item, index) => new Button(item, index));
	}
}

class Button {
	public el: HTMLElement;
	public id: number;

	constructor(el: HTMLElement, index: number) {
		this.el = el;
		this.id = ++index;
		this._init();
	}

	private _init(): void {
		this._styling();
		this._bind();
	}

	private _styling(): void {
		this.el.style.cssText = `
        background:#fae58c;
        color: #1e7dc6;`;
	}

	private _bind(): void {
		this.el.addEventListener('click', (e) => {
			console.log(
				`Button 클래스로부터 생성된 Button ${this.id} 인스턴스`
			);
		});
	}
}

let buttons = new Buttons($('.button'));

type ComponentType = {
	el: string;
	style: string;
};

function Component(options: ComponentType): Function {
	return function (target: Function) {
		let proto = target.prototype;
		let component = (proto.el = document.querySelector(options.el));

		if (component.nodeName !== 'button') {
			component.setAttribute('role', 'button');
			component.setAttribute('tabindex', '0');
		}
		(component as HTMLElement).style.cssText = options.style;
		console.log(proto.el.outerHTML);
	};
}

@Component({
	el: '.ts',
	style: `
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0.3em 0.7em;
        `,
})
class ButtonComponent {
	static version: string = `0.0.1`;

	constructor(public type: string) {}
	static create() {}
	public toggle() {}
	public deactive() {}
	public destroy() {}
}
