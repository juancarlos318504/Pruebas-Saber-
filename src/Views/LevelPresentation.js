import React, { Component } from "react";
import './Start.css';
import PanelView from '../Components/PanelView';
import AditionalPanel from '../Components/AditionalPanel';
import CardTest from '../Components/CardTest';
import ButtonSecundary from '../Components/ButtonSecundary';
import RankingTest from '../Components/RankingTest';

class LevelPresentation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const {content, heigth} = this.props;
        const headerInfo=
        <div className="o-tittle-container">
            <h2>PROGRAMACIÓN EN HTML5</h2>
            <h1>Paula</h1>
        </div>

        const PanelInfo =
        <div className="o-panel-info o-panel-start">
            
            <div className="o-buttons-start-container">
                <ButtonSecundary text="VER MÁS PRUEBAS" style="white"></ButtonSecundary>
            </div>
        </div>


        return(
            <PanelView headerInfo={headerInfo} RigthPanel={<RankingTest></RankingTest>} PanelInfo={PanelInfo}/>
        );
    }

}

export default LevelPresentation;