import React from 'react';
import axios from 'axios';

class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {response : false}
	}

	login(){
		/*console.log(this.refs);*/
		let user = {
			"username" : this.refs.user.value,
			"password" : this.refs.pass.value,
		}

		var _this = this;
		axios.post('/surf-social/login')
		.then(function(response){
			user.data = response.data;
			console.log("user", user);
			_this.setState({response : user})
		});

	}

	render(){
		let user = '';
		if(this.state.response){
			user = JSON.stringify(this.state.response);
		}

		return (
			<div className="loginFormCss" >
				<label >Username </label>
				<input ref="user" type="text" placeholder="username" />
				<label >Password </label>
				<input ref="pass" type="password" placeholder="password" />
				<button className="button round success small" onClick={this.login.bind(this)}>Login</button>
				<hr/>
				{user}
				<hr/>
			</div>

		)
	}

};

export default Login;