import React, { Component } from "react";
import './FinalLevel.css';

import Header from '../Components/Header'
import Menu from '../Components/Menu'
import ButtonSecundary from '../Components/ButtonSecundary';

const FinalLevel =(props)=> {

    const { level, points} = props;
    const headerInfo=
            <div className="o-tittle-container">
                <h2 style={{color:"white"}}>PROGRAMACIÓN EN HTML5</h2>
            </div>
    return(
        <div className="o-principal-panel-final">
            <div className="o-left-panel-final">
                <div className="o-left-container">
                    <Header content={headerInfo} heigth={"15%"}></Header>
                    <div className="o-content-container">
                        <div className="o-menu-container-final">
                            <Menu></Menu>
                        </div>

                        <div className="o-info-container-final">
                            <img src={require('../Images/Avatares/foto.svg')}/>
                            <h2>¡FELICITACIONES <span>PAULA !</span></h2>
                            <div className="o-final-star">
                                <br></br>
                                <h3>COMPLETASTE</h3>
                                <h3>{"EL NIVEL " +level}</h3>
                                <img src={require('../Images/cup.svg')}/>
                                <h4>{"Ganas " + points}</h4>
                                <h4>puntos</h4>
                            </div>

                            <div className="o-buttons-final-container">
                                <ButtonSecundary onClick={()=>props.history.push('./inicio')} text="VER MÁS PRUEBAS" style="allWhite"></ButtonSecundary>
                                <ButtonSecundary onClick={()=>console.log("seguir al final")} text="SEGUIR AL EXAMEN FINAL" style="allWhite"></ButtonSecundary>
                            </div>

                        </div>

                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default FinalLevel;