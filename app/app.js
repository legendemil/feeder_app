import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// import AppConatiner
import AppContainer from './containers/app.container';

// import Home Component
import Home from './components/mainArea/home.component';

// import Karmienie Component
import Karmienie from './components/mainArea/karmienie.component';

// import Inkubacja Component
import Inkubacja from './components/mainArea/inkubacja.component';

// import Linienie Component
import Linienie from './components/mainArea/linienie.component';

// import Dodatkowe Component
import Dodatkowe from './components/mainArea/dodatkowe.component';

// import DetailsKarmienie
import DetailsKarmienie from './components/mainArea/karmienie/detailsKarmienie.component';

// import AddAnimalForm
import AddAnimalForm from './components/mainArea/animal/addAnimalForm.component';


export default class Layout extends React.Component {
	constructor(){
		super();
		sessionStorage.setItem('user_id', 1);
	}

	render(){
		
		return (
			<div>
				<AppContainer />
			</div>
		);
	}
}


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={AppContainer} >
			<IndexRoute component={Home} />
			
			<Route path="Karmienie" component={Karmienie} />
			<Route path="/Karmienie/:animalId" component={DetailsKarmienie}/>

			<Route path='animal/add' component={AddAnimalForm}/>

			<Route path="Inkubacja" component={Inkubacja}/>
			<Route path="Linienie" component={Linienie}/>
			<Route path="Dodatkowe" component={Dodatkowe}/>
		</Route>
	</Router>
, document.getElementById('my-app'));

