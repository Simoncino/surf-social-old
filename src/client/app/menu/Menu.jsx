import React from 'react'
import NavLink from '../navigation/NavLink'
//import Login from '../authentication/Login'

class Menu extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Io sono menu</h3>
        <ul>
          <li><NavLink to="/surf-social/spot" onlyActiveOnIndex>Spot</NavLink></li>
          <li><NavLink to="/surf-social/auth">Login</NavLink></li>
        </ul>  
        <h4>Io sono children</h4>
        <hr />
        {this.props.children}
        <hr />
      </div>
      )
  }

}

export default Menu;