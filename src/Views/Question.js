import React, { Component } from "react";
import './Question.css';
import ButtonSecundary from '../Components/ButtonSecundary';
import Menu from '../Components/Menu';
import Header from '../Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/html";

let code = "";
class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            completed : false,
            acertado: false, 
            codeText: "",
            options: props.question.opciones  
        };
    }
    


    onchangeCode(value){
        code=value
    }

    onClickResponse(){
        
        if(!this.state.completed){
            if(this.props.question.tipo=="opciones"){
                let iscorrect = true;
                this.props.question.opciones.map((option,i) =>{
                    //console.log(option.opcion + ":  " + document.getElementById(option.opcion).checked);
                    const correct = document.getElementById(option.opcion).checked == option.correcta? true: false;
                    iscorrect = iscorrect && correct;
                    //document.getElementById(option.opcion).checked=false;
                });
                this.setState({
                    completed:true,
                    acertado: iscorrect
                });
                console.log("Respuesta correcta?:  " + iscorrect);
            }
            else if(this.props.question.tipo=="codigo"){
                this.setState({
                    completed:true,
                    acertado: code == this.props.question.codigo
                });
                
            }
            
        }


        else{
            this.setState({
                completed:false,
                acertado:false
            })
            this.props.question.opciones.map((option,i) =>{
                document.getElementById(option.opcion).checked=false;
            });
            this.props.sendResponse(this.state.acertado);
        }
    }

    render() {
        const {content, heigth} = this.props;
        const headerInfo=
        <div className="o-tittle-container">
            <h2>PROGRAMACIÓN EN HTML5</h2>
            <h1>Nivel 3</h1>
        </div>

        //const PanelInfo =
        

        const options = this.props.question.opciones.map((option,i) =>
            <div class="custom-control custom-switch custom-switch-xl o-option">
                <input type="checkbox" class="custom-control-input" id={option.opcion}/>
                <label class="custom-control-label o-description" for={option.opcion}> <span>{option.opcion+"."}</span>{option.texto}</label>
            </div>
        );

        const optionsQuestion = 
            <form className="o-options-container">
                {options}
            </form>

        const codeAreaInput=
            
                <AceEditor
                    className="o-code-container"
                    height="40%"
                    width="100%"
                    mode="html"
                    theme="monokai"
                    onChange={this.onchangeCode.bind(this)}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    fontSize={15}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    //value="<!DOCTYPE html>"
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: false,
                        tabSize: 2,
                    }}
                    placeholder="<!DOCTYPE html>"
                />
            


        const imageQuestion= <img className="o-image-question" src={this.props.question.imagen}></img>

        const response = 
            <div className="o-response-question-container">
                <div className="o-response-points-container">
                    <p style={this.state.acertado? {fontSize:"1.2em"}: {fontSize:"1em"}}>{this.state.acertado?  "+"+this.props.question.puntos : "Inténtalo de nuevo"}</p>
                    <p>{this.state.acertado?"puntos":""}</p>
                </div>
                <div className="o-response-verify-container" style={this.state.acertado?{backgroundColor:"#30B885"}: {backgroundColor:"#EF4136"}}>
                    <h2>{this.state.acertado? "¡Respuesta acertada!" : "Respuesta incorrecta"}</h2>
                    <div className="o-circle-response">
                        <img src={this.state.acertado?require('../Images/Preguntas/check.svg'):require('../Images/Preguntas/fail.svg') }/>
                    </div>
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
                                                                 
                                    <div className="o-panel-info o-panel-question">
                                        <div className="o-question-content">
                                            <div className="o-number-question"><p>1.</p></div>
                                            <p className="o-description"> {this.props.question.pregunta}</p>
                                        </div>

                                        {this.props.question.imagen ==""?"": imageQuestion}

                                        {this.props.question.tipo=="opciones"? optionsQuestion: codeAreaInput}
                                        
                                        <div className="o-buttons-question-container">
                                            <ButtonSecundary type="submit" text={!this.state.completed? "ENVIAR RESPUESTA": "SIGUIENTE PREGUNTA"} style="white" onClick={this.onClickResponse.bind(this)}></ButtonSecundary>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
        
                    <div className="o-rigth-panel-question">
                        <div className="o-helps-container">
                            <div className="o-help-item-container" style={{cursor:"auto"}}> 
                                <img className="o-icon-help" style={{width:"70%"}} src={require('../Images/ayudas/ayuda.svg')}/>
                                <p className="o-help-tittle"> AYUDAS </p>
                            </div>

                            <div className="o-help-item-container"> 
                                <img className="o-icon-help-item" src={require('../Images/ayudas/cambiar.svg')}/>
                                <p>Una pista</p>
                            </div>

                            <div className="o-help-item-container"> 
                                <h4>50/50</h4>
                                <p>Una pista</p>
                            </div>

                            <div className="o-help-item-container"> 
                                <img className="o-icon-help-item" src={require('../Images/ayudas/guarda.svg')}/>
                                <p>Guarda la pregunta para después</p>
                            </div>
                        </div>

                        {this.state.completed? response: ""}
                    </div>
                </div>
        );
    }

}

export default Question;