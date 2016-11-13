import React from 'react';
import axios from 'axios';

import Post from './Post.jsx';

class PostStream extends React.Component {
	constructor(props){
		super(props);
		/*this.state = {response : false}*/
	}


	render(){
		return (
			<div>
				<h3>gestore streaming: view contenitore + operazioni per scorrere post</h3>
				<hr/>Separatore<hr/>
				<Post />
				<hr/>Separatore<hr/>
				<Post />
				<hr/>Separatore<hr/>
				<Post />
				<hr/>Separatore<hr/>
				<Post />
				<hr/>Separatore<hr/>
				<Post />
				<hr/>Separatore<hr/>
				<Post />
			</div>
			)
	}
}

export default PostStream;