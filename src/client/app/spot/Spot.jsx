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
			<div className="spotCss">
				<h3>Spot: nome dello spot</h3>
				<div className="spotCssFoto">
					<img src="http://civitavecchia.portmobility.it/sites/default/files/castello_di_santa_severa_ok.jpg" alt="Santa Severa"/>
					<img src="https://i.ytimg.com/vi/a7-TMQFJhCw/maxresdefault.jpg" alt="Santa Severa"/>
					<img src="https://i.ytimg.com/vi/4AL3YKxXwGM/maxresdefault.jpg" alt="Santa Severa"/>
				</div>
				<div className="spotCssMetadati">Descrizione: qui ci va pubblica su fb e altre cagate varie</div>
				<hr className="clear" />
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