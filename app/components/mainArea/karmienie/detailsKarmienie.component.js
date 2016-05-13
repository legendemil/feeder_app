import React from 'react';

// import AnimalStore
import AnimalStore from '../../../stores/AnimalStore.js';

// import FeedingStore
import FeedingStore from '../../../stores/FeedingStore.js';

// import action-btn
import ActionBtn from './actionBtn.component';

export default class DetailsKarmienie extends React.Component {
	constructor(){
		super();
		this.getAnimal = this.getAnimal.bind(this);
		this.state = {
			animal: {},
			feedings: []
		};
		this.getFeedings = this.getFeedings.bind(this);
	}

	componentDidMount(){
		this.getAnimal(this.props.params.animalId);
	}

	componentWillMount(){
		FeedingStore.on('fetch_feedings', this.getFeedings);
		FeedingStore.getFeedings(this.props.params.animalId);
	}

	componentWillUnmount(){
		FeedingStore.removeListener('fetch_feedings', this.getFeedings);
	}
	
	// get single animal
	getAnimal(_id){
		let _this = this;

		AnimalStore.getAnimal(_id).then(function (doc) {
			_this.setState({
				animal: doc
			});
			console.log(_this.state.animal);
		});
	}

	// get lsit of feeding
	getFeedings(){
		this.setState({
			feedings: FeedingStore.feedings
		});
		console.log('State feedings:', this.state.feedings);
	}

	render(){
	
		return (
			<div id='details-karmienie' className="main-area-content col-md-12">
				<h1>
					Historia karmień: {this.state.animal.type}  {this.state.animal.name}
					<ActionBtn title={"Dodaj nowe karmienie"} linkTo={`/Karmienie/${this.props.params.animalId}/add`} />
					<button className="action-btn">Ustaw częstotliwość karmień</button>
				</h1>
				<ol id="karmienie-list">
					<li>Następne karmienie: Nowa data karmienia generowana automatycznie</li>
					<li>12 luty 2016 - 2 x jeżynka - tak 
						<button className="action-btn">Edytuj<i className="fa fa-pencil" aria-hidden="true"></i></button>
					</li>
					<li>26 styczeń 2016 - 2 x jeżynka - nie
						<button className="action-btn">Edytuj<i className="fa fa-pencil" aria-hidden="true"></i></button>
					</li>
					<li>12 styczeń 2016 - jeżynka - tak
						<button className="action-btn">Edytuj<i className="fa fa-pencil" aria-hidden="true"></i></button>
					</li>
				</ol>
			</div>
		);
	}
}
