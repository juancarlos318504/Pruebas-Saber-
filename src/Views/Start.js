import React, { Component } from "react";
import './Start.css';
import PanelView from '../Components/PanelView';
import AditionalPanel from '../Components/AditionalPanel';
import CardTest from '../Components/CardTest';
import ButtonSecundary from '../Components/ButtonSecundary';

class Start extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const {content, heigth} = this.props;
        const headerInfo=
        <div className="o-tittle-container">
            <h2>INICIO</h2>
            <h1> <span>Hola,</span>  Paula</h1>
        </div>

        const PanelInfo =
        <div className="o-panel-info o-panel-start">
            <p className="o-description">Estas son los exámenes que tienes en curso. ¡Complétalos y recibe tu certificado!</p>
            <div className="o-cards-start-container">
                <CardTest
                    tittle="Ilustración digital"
                    icon={require('../Images/IconCardIlustracion.svg')}
                    imgProgress={require('../Images/ProgressIlustracion.svg')}
                    percent="35%"
                    nivel="Nivel 3"/>

                <CardTest
                    tittle="Programación en HTML"
                    icon={require('../Images/IconCardProgramacion.svg')}
                    imgProgress={require('../Images/progressProgramacion.svg')}
                    percent="25%"
                    nivel="Nivel 2"/>
            </div>
            <div className="o-buttons-start-container">
                <ButtonSecundary text="VER MÁS PRUEBAS" style="white"></ButtonSecundary>
                <div style={{marginLeft: "15em"}}><ButtonSecundary text="RANKING GENERAL" style="green"></ButtonSecundary></div>
                
            </div>
        </div>


        return(
            <PanelView headerInfo={headerInfo} RigthPanel={<AditionalPanel></AditionalPanel>} PanelInfo={PanelInfo}/>
        );
    }

}

export default Start;