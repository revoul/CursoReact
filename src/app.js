import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HolaMundo extends Component{
	render () {
		return (
			<div>Hola Mundo</div>
		)
	}
};

window.onload = function () {
	ReactDOM.render(<HolaMundo />, document.getElementById('app'));
};