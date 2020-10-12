import React, { Component } from "react";
import './Menu.css';
import { NavLink, Link } from "react-router-dom";

const Menu =(props)=> {

    return(
        <div className="o-menu-panel">
            <div className="o-menu-content">
                <div className="o-menu-option">
                    <img src={require('../Images/perfil.png')}/>
                    <p>Perfil</p>
                </div>

                <div className="o-menu-option">
                    <img src={require('../Images/inicio.png')}/>
                    <p>Inicio</p>
                </div>

                <div className="o-menu-option">
                    <img src={require('../Images/pruebas.png')}/>
                    <p>Explorar pruebas</p>
                </div>

                <div className="o-menu-option">
                    <img src={require('../Images/configuracion.png')}/>
                    <p>Configuración</p>
                </div>

                <div className="o-menu-option">
                    <img src={require('../Images/notificaciones.png')}/>
                    <p>Notificaciones</p>
                </div>
            </div>

            <button className="o-exit-button" > <a href="/">Salir</a></button>
            
        </div>
    );
}

export default Menu;