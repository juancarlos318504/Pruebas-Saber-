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
                    tittleLabel="ILUSTRACIÓN DIGITAL"
                    icon={require('../Images/IconCardIlustracion.svg')}
                    imgProgress={require('../Images/ProgressIlustracion.svg')}
                    percent="35%"
                    nivel="Nivel 3"
                    
                    history={this.props.history}/>

                <CardTest
                    tittle="Programación en HTML"
                    tittleLabel="PROGRAMACIÓN EN HTML5"
                    icon={require('../Images/IconCardProgramacion.svg')}
                    imgProgress={require('../Images/progressProgramacion.svg')}
                    percent="25%"
                    nivel="Nivel 2"
                    history={this.props.history}/>
            </div>
            <div className="o-buttons-start-container">
                <ButtonSecundary onClick={()=>console.log("mas pruebas")} text="VER MÁS PRUEBAS" style="white"></ButtonSecundary>
                <div style={{marginLeft: "15em"}}><ButtonSecundary onClick={()=>this.props.history.push('/ranking')} text="RANKING GENERAL" style="green"></ButtonSecundary></div>
                
            </div>
        </div>


        return(
            <PanelView headerInfo={headerInfo} RigthPanel={<AditionalPanel></AditionalPanel>} PanelInfo={PanelInfo}/>
        );
    }

}

export default Start;