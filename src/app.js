import React from 'react';
import ReactDOM from 'react-dom';

const HolaMundo = React.createClass({
	render () {
		return (
			<div><h1>Hola Mundo</h1></div>
		)
	}
});

window.onload = function () {
	ReactDOM.render(<HolaMundo />, document.getElementById('app'));
};