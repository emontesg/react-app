import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './login';
import Registrar from './register';

class Home extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
                <div className="people-header">
                    <div className="btn-log">
                        <Link to="/login">Iniciar Sesión</Link>
                    </div>
                    <div className="btn-reg">
                        <Link to="/registrar">Registrate ahora <br/>
                        y encuentra las mejores ofertas de trabajo en tu zona</Link>
                    </div>
                    {this.props.children}
                </div>
        )

    }
}
export default Home;