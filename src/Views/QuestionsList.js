import React, { Component } from "react";
import './Login.css';
import Question from './Question';
import FinalLevel from './FinalLevel';


const questions = [
    {
        numero:1,
        respondida: false,
        puntos: 15,
        pregunta: "¿Cual de las siguientes líneas de código es la correcta en HTML5?",
        imagen:"",
        tipo:"opciones", 
        codigo: "",
        opciones:[
            {
                opcion:"A",
                texto:'<script type="text/javascript" src="fichero.js"></>',
                correcta:false,
            },
            {
                opcion:"B",
                texto:'<script src="fichero.js"></script>',
                correcta:true,
            },
            {
                opcion:"C",
                texto:'<script type="text/javascript1.5" src="fichero.js"></script>',
                correcta:true,
            },
            {
                opcion:"D",
                texto:'<script type="text/javascript1.5"/>',
                correcta:false,
            }
        ]              
    },


    {
        numero:2,
        respondida: false,
        puntos: 15,
        pregunta: "¿Qué realiza el siguiente código fuente?",
        imagen: require('../Images/Preguntas/Pregunta2img.svg'),
        tipo: "opciones", 
        codigo: "",
        opciones:[
            {
                opcion:"A",
                texto:'Rellenar el Canvas de color rojo',
                correcta:false,
            },
            {
                opcion:"B",
                texto:'Dibujar una línea roja dentro del Canvas',
                correcta:true,
            },
            {
                opcion:"C",
                texto:'Insertar un cuadrado en el Canvas de 180px de lado',
                correcta:false,
            },
            {
                opcion:"D",
                texto:'El código no compila. Da error',
                correcta:false,
            }
        ]              
    },

    {
        numero:3,
        respondida: false,
        puntos: 15,
        pregunta: "Escribe las líneas de código necesarias para crear esta imagen en HTML.",
        imagen: require('../Images/Preguntas/Pregunta3img.svg'),
        tipo: "codigo", 
        codigo: "codigo correcto",
        opciones:[]              
    },
]

class QuestionsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            points:0,
            finalized:false
        };
    }

    sendResponse(correct){
        if(this.state.questionNumber < questions.length-1){
            questions[this.state.questionNumber].respondida=true;
            this.setState({
                questionNumber: this.state.questionNumber+1,
                //points: this.state.points + questions[this.state.questionNumber].puntos
            });
            if(correct){
                this.setState({
                    //questionNumber: this.state.questionNumber+1,
                    points: this.state.points + questions[this.state.questionNumber].puntos
                });
            }
        }else{

            if(correct){
                this.setState({
                    //questionNumber: this.state.questionNumber+1,
                    points: this.state.points + questions[this.state.questionNumber].puntos
                });
            }
            this.setState({
                //points: this.state.points + questions[this.state.questionNumber].puntos,
                finalized:true
            })
        }

    }

    render() {

        if(this.state.finalized){
            return(
                <FinalLevel level="3" history={this.props.history} points={this.state.points}></FinalLevel>
            );
        }
        else{
            return(
                <Question question={questions[this.state.questionNumber]} sendResponse={this.sendResponse.bind(this)}></Question>
            );
        }

        
        
    }

}

export default QuestionsList;