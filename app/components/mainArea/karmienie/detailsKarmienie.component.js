import React from 'react';

// import AnimalStore
import AnimalStore from '../../../stores/AnimalStore.js';

// import FeedingStore
import FeedingStore from '../../../stores/FeedingStore.js';

// import action-btn
import ActionBtn from './actionBtn.component';

// import feedingsListItem
import FeedingListItem from './feedingList/feedingListItem.component.js';

export default class DetailsKarmienie extends React.Component {
	constructor(){
		super();
		this.getAnimal = this.getAnimal.bind(this);
		this.state = {
			animal: {},
			feedings: [],
			feedingListItems: [],
			isFeedingsEmpty: true
		};
		this.getFeedings = this.getFeedings.bind(this);
		this.createFeedingListItems = this.createFeedingListItems.bind(this);
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
		this.createFeedingListItems();
	}

	// create feeding list items
	createFeedingListItems(){
		const feedingsList = this.state.feedings.map((feeding, id) => {
			let date = new Date(feeding.date).toLocaleDateString(),
				is_done = 'Nakarmiony',
				food = feeding.food,
				unfeededClass = '',
				feedingId = feeding._id,
				feedingRev = feeding._rev;

			if(!feeding.is_done) {
				is_done = 'Nienakarmiony';
				unfeededClass = 'unfeeded';
			}
			return <FeedingListItem feedingId={feedingId}
									feedingRev={feedingRev}
									date={date} 
									food={food} 
									is_done={is_done} 
									unfeededClass={unfeededClass}
									key={id}
									lp={id + 1}/>
		});

		this.setState({
			feedingListItems: feedingsList
		});

		if(feedingsList.length)
			this.setState({
				isFeedingsEmpty: false
			});
	}

	render(){

		return (
			<div id='details-karmienie' className="main-area-content col-md-12">
				<h1>
					Historia karmień: {this.state.animal.type}  {this.state.animal.name}
					<ActionBtn title={"Dodaj nowe karmienie"} linkTo={`/Karmienie/${this.props.params.animalId}/add`} />
					<button className="action-btn">Ustaw częstotliwość karmień</button>
				</h1>
				
				<table id='karmienie-list'>
					<thead>
						<tr>
							<th>Lp.</th>
							<th>Data</th>
							<th>Pożywienie</th>
							<th>Czy zjadł?</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ this.state.feedingListItems}
					</tbody>
				</table>
				{this.state.isFeedingsEmpty ? 'Twoje zwierzę jest głodne. Nakarm je!' : '' }
			</div>
		);
	}
}