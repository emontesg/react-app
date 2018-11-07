import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, IndexRoute, Switch, Redirect } from "react-router-dom";
import Home from './routes/home';
import Login from './routes/login';
import Registrar from './routes/register';

 
class App extends Component {
  constructor(props){
    super(props);   
  }
  render(){
    return (
        <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registrar" component={Registrar} />
            <Redirect to="/" />
          </Switch>
        </div>
        </Router>
    );
  }
}
export default App;
