import React, { Component } from "react";
import './Start.css';
import './LevelPresentation.css';
import PanelView from '../Components/PanelView';
import AditionalPanel from '../Components/AditionalPanel';
import CardTest from '../Components/CardTest';
import ButtonSecundary from '../Components/ButtonSecundary';
import RankingTest from '../Components/RankingTest';

import {Line} from 'react-chartjs-2';

const state = {
    labels: ['Nivel 1', 'Nivel 2', 'Nivel 3',
             'Final'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#E6E7E8',
        borderColor: '#00AE82',
        borderWidth: 2,
        data: [182, 218, 218, 0]
      }
    ]
  }

class LevelPresentation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount(){
        
    }

    render() {
        if(this.props.location.data == undefined){
            this.props.history.push('/inicio')
            return("");
        } else{
            const {content, heigth, tittle} = this.props;
            const headerInfo=
            <div className="o-tittle-container">
                <h2>{this.props.location.data.tittle}</h2>
                <h1>Paula</h1>
            </div>

            const PanelInfo =
            <div className="o-panel-info o-panel-start">
                <div className="o-graphic-level-container">
                    <div className= "o-graphic-level-panel">
                        <h5>Tu progreso</h5>
                        <div className="o-line-graphic-container">
                            <div className="o-points-container" >
                                <div className="o-point-panel">
                                    <p className="o-label-line-points">182</p>
                                    <p className="o-label-line-points">puntos</p>

                                    <div className="o-line" style={{height:200*1.3*100/500+"%" }}> 
                                        <div className="o-line-circle" style={{height:".8em",width:".8em"}}></div>
                                        <div className="o-line-circle" style={{height:"3em",width:"3em", }}><p>Nivel 1</p></div>
                                    </div>
                                </div>

                                <div className="o-point-panel">
                                    <p className="o-label-line-points">218</p>
                                    <p className="o-label-line-points">puntos</p>
                                    
                                    <div className="o-line" style={{height:218*1.5*100/500+"%" }}> 
                                        <div className="o-line-circle" style={{height:".8em",width:".8em"}}></div>
                                        <div className="o-line-circle" style={{height:"3em",width:"3em", }}><p>Nivel 2</p></div>
                                    </div>
                                </div>

                                <div className="o-point-panel">

                                    <div className="o-line" style={{height:"75%", backgroundColor:"transparent"}}> 
                                        <div className="o-line-circle" style={{height:"3em",width:"10em", backgroundColor:"transparent"}}>
                                            <button onClick={()=>this.props.history.push('/pregunta')} className="o-button-secundary o-button-subscribe" style={{marginBottom:"5em", border: "2px solid #6D929E"}}>SEGUIR</button> 
                                            <img src={require('../Images/flecha_1.svg')} style={{height: '.8em'}}/>
                                        </div>
                                        
                                        <div className="o-line-circle" style={{height:"3em",width:"3em", }}><p>Nivel 3</p></div>
                                    </div>
                                </div>

                                <div className="o-point-panel">
                                    
                                    <div className="o-line" style={{height:218*1.5*100/500+"%",backgroundColor:"transparent"}}> 
                                        <div className="o-line-circle" style={{height:".8em",width:".8em",backgroundColor:"transparent"}}></div>
                                        <div className="o-line-circle" style={{height:"3em",width:"3em", }}><p>Final</p></div>
                                    </div>
                                </div>
                            </div>
                            <img src={require('../Images/line.svg')}></img>
                        </div>
                    </div>
                    
                </div>
                <div className="o-buttons-start-container">
                    <ButtonSecundary text="VER MÁS PRUEBAS" style="white"></ButtonSecundary>
                </div>
            </div>


            return(
                <PanelView headerInfo={headerInfo} RigthPanel={<RankingTest></RankingTest>} PanelInfo={PanelInfo}/>
            );
        }
        
    }

}

export default LevelPresentation;