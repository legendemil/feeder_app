import React from 'react';
import ReactDOM from 'react-dom';


export default class Layout extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				Work
			</div>
		);
	}
}

ReactDOM.render(<Layout />, document.getElementById('my-app'));