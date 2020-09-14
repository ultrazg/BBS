import React from 'react';

// CSS
import './App.css';
import 'antd-mobile/dist/antd-mobile.min.css';

// Plugin
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

// Routers
import Routers from './Routers';

function App() {
  // TODO
  let token = true

  return (
    <Router>
      <Switch>
        {
          Routers.map((item, index) => {
            return <Route key={index} path={item.path} exact
                          render={props => (!item.auth ? (<item.component {...props} />) : (token ?
                            <item.component {...props} /> :
                            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>))}/>
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
