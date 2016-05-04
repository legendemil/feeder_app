import React from 'react';
import ReactDOM from 'react-dom';

// import AppConatiner
import AppConatiner from './containers/app.container';

export default class Layout extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<AppConatiner />
			</div>
		);
	}
}

ReactDOM.render(<Layout />, document.getElementById('my-app'));