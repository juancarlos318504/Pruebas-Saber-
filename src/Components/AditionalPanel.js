import React, { Component } from "react";
import './AditionalPanel.css';

import BoxInfo from './BoxInfo';
import ButtonSecundary from './ButtonSecundary';


class AditionalPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        
        return(
            <div className="o-aditional-panel">
                <div className="o-certificates">
                    <p>MIS CERTIFICADOS</p>
                    <div className="o-boxes-container">
                        <BoxInfo toggle={false} image={require('../Images/trabajoremoto.svg')} tittle={"Trabajo remoto"} color="var(--green_box)"></BoxInfo>
                        <BoxInfo toggle={false} image={require('../Images/programacion.svg')} tittle={"Programación CSS"} color="var(--purple_box)"></BoxInfo>
                        
                    </div>
                    <ButtonSecundary onClick={()=>console.log("ver más")} text="VER MÁS" style="gray"></ButtonSecundary>
                </div>

                <div className="o-certificates">
                    <p>PRUEBAS RELACIONADAS</p>
                    <div className="o-boxes-container">
                        <BoxInfo toggle={true} image={require('../Images/video.svg')} tittle="Edición de videos" color="var(--green_box)"></BoxInfo>
                        <BoxInfo toggle={true} image={require('../Images/servicio.svg')} tittle="Servicio al cliente" color="white"></BoxInfo>
                        <BoxInfo toggle={true} image={require('../Images/sonido.svg')} tittle="Edición de sonido" color="white"></BoxInfo>
                        <BoxInfo toggle={true} image={require('../Images/javascript.svg')} tittle="JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" color="var(--purple_box)"></BoxInfo>
                        
                    </div>
                    <ButtonSecundary onClick={()=>console.log("ver más")} text="VER MÁS" style="gray"></ButtonSecundary>
                </div>
                
            </div>
        );
    }

}

export default AditionalPanel;