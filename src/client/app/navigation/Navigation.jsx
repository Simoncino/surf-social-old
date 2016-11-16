import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Menu from '../menu/Menu.jsx'
import Spot from '../spot/Spot.jsx'
import Login from '../authentication/Login.jsx'

module.exports = (
  <Route path="surf-social" component={Menu}>
    <IndexRoute component={Spot}/>
    <Route path="/surf-social/spot" component={Spot}/>
    <Route path="/surf-social/auth" component={Login}/>
  </Route>
  )
