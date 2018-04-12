import * as R from 'ramda';
import './styles.css';
import Rx from 'rxjs/Rx';

function otherFunc() {
	let stream$ = Rx.Observable.of(1, 2, 3).map(x => x + '!!!');
	stream$.subscribe((val) => {
		console.log(val);
	});
}

function component() {
	otherFunc();
	var element = document.createElement('div');
	element.innerHTML = R.join(' ', ['Hello', 'webpack']);
	return element;
}

document.body.appendChild(component());
