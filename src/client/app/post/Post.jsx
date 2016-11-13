import React from 'react';
import axios from 'axios';

class Post extends React.Component {
	constructor(props){
		super(props);
		/*this.state = {response : false}*/
	}


	render(){
		return (
			<div>
				<div>utente</div><div>data</div><div>livello onda</div>
				<div>foto</div>
				<div>breve didascalia al max 100 caratteri</div>
			</div>
			)
	}
}

export default Post;