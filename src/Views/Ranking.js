import React, { Component } from "react";
import './Ranking.css';
import PanelView from '../Components/PanelView';
import AditionalPanel from '../Components/AditionalPanel';
import ButtonSecundary from '../Components/ButtonSecundary';
import CardSubscribe from '../Components/CardSubscribe';
import ItemRanking from '../Components/ItemRanking';

class Ranking extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const {content, heigth} = this.props;
        const headerInfo=
        <div className="o-tittle-container">
            <h2>RANKING GENERAL SEMANAL</h2>
            <p className="o-description">Los exámenes con más participación esta semana</p>
        </div>

        const PanelInfo =
        <div className="o-panel-info o-panel-ranking">
            <div className="o-suscribe-cards-container">
                <CardSubscribe tittle="Trabajo remoto" image={require('../Images/trabajoRemotoGreen.svg')} certificates="200"></CardSubscribe>
                <CardSubscribe tittle="Servicio al cliente" image={require('../Images/servicioGreen.svg')} certificates="150"></CardSubscribe>
                <CardSubscribe tittle="Programación en HTML" image={require('../Images/programacionGreen.svg')} certificates="100"></CardSubscribe>
            </div>

            <div className="o-items-ranking-container">
                <p className="o-description">Ranking de usuarios con más certificaciones</p>
                <ItemRanking number="1" certificates="22" points="1743"></ItemRanking>
                <ItemRanking number="2" certificates="18" points="1743"></ItemRanking>
                <ItemRanking number="3" certificates="15" points="1743"></ItemRanking>
                <ItemRanking number="4" certificates="9" points="1743"></ItemRanking>
            </div>
            <div className="o-buttons-ranking-container">
                <ButtonSecundary text="RANKINGS POR PRUEBAS" style="white"></ButtonSecundary>
            </div>
            
        </div>


        return(
            <PanelView headerInfo={headerInfo} RigthPanel={<AditionalPanel></AditionalPanel>} PanelInfo={PanelInfo}/>

        );
    }

}

export default Ranking;