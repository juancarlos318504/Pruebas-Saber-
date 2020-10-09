import React, { Component } from "react";
import './Question.css';
import ButtonSecundary from '../Components/ButtonSecundary';
import Menu from '../Components/Menu';
import Header from '../Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class Question extends Component{
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
            <h1>Nivel 3</h1>
        </div>

        const PanelInfo =
        <div className="o-panel-info o-panel-question">
            <div className="o-question-content">
                <div className="o-number-question"><p>1.</p></div>
                <p className="o-description"> ¿Cual de las siguientes líneas de código es la correcta en HTML5?</p>
            </div>
            
            <form className="o-options-container">

                <div class="custom-control custom-switch custom-switch-xl o-option">
                    <input type="checkbox" class="custom-control-input" id="A"/>
                    <label class="custom-control-label o-description" for="A"> <span>A.</span>Pregunta</label>
                </div>

                <div class="custom-control custom-switch custom-switch-xl">
                    <input type="checkbox" class="custom-control-input" id="B"/>
                    <label class="custom-control-label o-description" for="B"> <span>B.</span>Pregunta</label>
                </div>

                <div class="custom-control custom-switch custom-switch-xl">
                    <input type="checkbox" class="custom-control-input" id="C"/>
                    <label class="custom-control-label o-description" for="C"> <span>C.</span>Pregunta</label>
                </div>

                <div class="custom-control custom-switch custom-switch-xl">
                    <input type="checkbox" class="custom-control-input" id="D"/>
                    <label class="custom-control-label o-description" for="D"> <span>C.</span>Pregunta</label>
                </div>
                
            </form>

            <div className="o-buttons-question-container">
                <ButtonSecundary type="submit" text="SIGUIENTE PREGUNTA" style="white"></ButtonSecundary>
            </div>
        </div>


        const question =()=>{
            return (
                ""
            )
        }
                


        return(
            <div className="o-principal-panel">
                    <div className="o-left-panel-question">
                        <div className="o-left-container">
                            <Header content={headerInfo} heigth={"15%"}></Header>
                            <div className="o-content-container">
                                <div className="o-menu-container">
                                    <Menu></Menu>
                                </div>
        
                                <div className="o-info-container">
                                    {PanelInfo}
                                </div>
                            </div>
                        </div>
                        
                    </div>
        
                    <div className="o-rigth-panel-question">
                        <div className="o-helps-container">
                            <div className="o-help-item-container"> 
                                <img className="o-icon-help" style={{width:"70%"}} src={require('../Images/ayudas/ayuda.svg')}/>
                                <p className="o-help-tittle"> AYUDAS </p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

}

export default Question;