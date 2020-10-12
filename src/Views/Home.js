import React, { Component } from "react";
import './Home.css';
import ButtonPrimary from '../Components/ButtonPrimary'
import { NavLink, Link } from "react-router-dom";


import Header from '../Components/Header';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {

        const contentHeader = 
            <div className="o-content-header-home">
                <ul className="o-options-header-home">
                    <NavLink activeClassName="active" className="o-option-home" exact to="/">
                        <li>Las pruebas</li>
                    </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="o-option-home" to="/">
                        <li>El icfes</li>
                    </NavLink>
                    <span> | </span>
                </ul>

                <div>
                    <Link to="/ingreso">
                        <ButtonPrimary text="INGRESAR" margin="0 1.5em" color="green_button"></ButtonPrimary>     
                    </Link>
                    
                    <Link to="/registro">
                        <ButtonPrimary text="REGISTRARSE" margin="0 1.5em" color="green_button"></ButtonPrimary>
                    </Link>
                    
                </div>
                

                <div class="o-search-container">
                    <button type="submit"></button>
                    <input type="text" placeholder="Buscar" name="Buscar"/>
                </div>
            </div>

        return(
            <div className='o-home-container'>                
                <Header content={contentHeader} heigth="20%"></Header>
                <div className="o-home-info-container">
                    <div className="o-home-text-container">
                        <div className="o-info">
                            <h1>Bienvenidos a las pruebas Saber+</h1>
                            <div>
                                <h3>Prueba tus conocimientos</h3>
                                <p>Una nueva forma de evaluar lo que sabes, entrena antes de la prueba final y gana recompensas.</p>
                            </div>
                            <ButtonPrimary text="IR A LA PRUEBA" margin="5em 0 0 0" color="blue_button"></ButtonPrimary>
                        </div>
                    </div>

                    <div className="o-home-image-container">
                        <img src={require("../Images/home.png")} alt="Logo" />
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;