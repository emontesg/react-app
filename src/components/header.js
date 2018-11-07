import React, {Component} from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {term : ''};
    }
    render(){
        return (
        <div className="row header-jobs">
            <div className="col-md-6 jobs-txt">
                <p>
                Chamba Ideal es una bolsa de empleo en la web, la cobertura del servicio se amplía mediante la creación de convenios con empresas, las cuales han creado empleos vacantes. buscamos ser la web de empleo líder en Latinoamérica. 
                La web ofrece a las empresas herramientas avanzadas para la gestión de los procesos de selección y facilita a los profesionales el acceso a nuevas oportunidades de trabajo.
                </p>
            </div>
            <div className="col-md-3">
                <img src="assets/logo.png" className="img-fluid" alt=""/>
            </div>
            <div className="search-bar col-md-3">
                <input onChange = {event => this.onInputChange(event.target.value)} className="form-control"/>
            </div>
        </div>
        
        )
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}
export default Header;