import React from 'react';


export default class Home extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-12 main-area-content' id='home'>
				<div className="row">
					<div className="col-md-6 ">
						<h1>Witaj w aplikacji FeederApp</h1>
						<h4>Dzięki aplikacji możesz kontrolować hodowlę swoich zwierząt. </h4>
						<h4>W jednym miejscu możesz przechowywać dane na temat swoich węży, patyczaków, liśćców i innych ukochanych zwierząt. </h4>
					</div>
					<div className="col-md-2">
						<img src="public/img/home/snake1.jpg" alt="snake1" className="img-circle"/>
						<img src="public/img/home/snake2.jpg" alt="snake2" className="img-circle"/>
					</div>
				</div>
				
			</div>
		);
	}
}
