import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import { Router, browserHistory } from 'react-router'
import Navigation from './navigation/Navigation.jsx'

import Login from './authentication/Login.jsx';
import Spot from './spot/Spot.jsx';

class App extends React.Component {

	constructor(props){
		super(props);
	}


	render(){
	
		return (

			<div className="text-center">
				<h3>Surfer Social Network</h3>

				<hr/>
				<Router routes={Navigation} history={browserHistory}/>
				<hr/>
				<Login />
				<hr/>
				<Spot />
			</div>

			);
	}

}

render(<App/>, document.getElementById('app'));


