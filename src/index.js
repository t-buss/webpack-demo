import _ from 'lodash';
import greet from './bla'

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}
document.body.appendChild(component());
greet();
