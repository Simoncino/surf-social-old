import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import Login from './authentication/Login.jsx';
import Spot from './spot/Spot.jsx';

class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			axiosData : {"nome":"nessuno"}
			/*,axiosDataMongo : {"mongo":"niente"}*/
		}
	}

	loadData(){
		var _this = this;
		axios.get('/testAxios')
		.then(function(response){
			_this.setState({axiosData:response.data});
		});  
	}

	/*loadDataMongo(){
		var _this = this;
		axios.get('/testAxiosMongo')
		.then(function(response){
			console.log('loadDataMongo() response', response);
			_this.setState({axiosDataMongo:response.data});
		});  
	}*/

	render(){
		var axiosData = this.state.axiosData;
		/*var axiosDataMongo = this.state.axiosDataMongo;*/
	
		return (

			<div className="text-center">
				<h3>Surfer Social Network</h3>
				<hr/>
				<button className="button round success small" onClick={this.loadData.bind(this)}>Load Data By Axios</button>
				<pre>{JSON.stringify(axiosData)}</pre>
				<hr/>
				<Login />
				<hr/>
				<Spot />
			</div>

			);
	}

	/*<hr/>
	<button className="button round success small" onClick={this.loadDataMongo.bind(this)}>Load Mongo Data By Axios</button>
	<pre>{JSON.stringify(axiosDataMongo)}</pre>*/
}

render(<App/>, document.getElementById('app'));


