import React from 'react';
import axios from 'axios';

import PostStream from '../post/PostStream.jsx';

class Spot extends React.Component {
	constructor(props){
		super(props);
		/*this.state = {response : false}*/
	}


	render(){
		return (
			<div>
				<h3>Spot: nome dello spot</h3>
				<div>Io sono parte riservata alle 3 foto</div>
				<p>Descrizione: qui ci va pubblica su fb e altre cagate varie</p>
				<hr/>
				<div>
					<p>Posizione: indirizzo</p>
					<div>Posizione: cartina</div>
				</div>
				<hr/>
				<div>
					<PostStream />
				</div>
			</div>
			)
	}
}

export default Spot;