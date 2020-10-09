import React, { Component } from "react";
import './Camera.css';
import Webcam from "react-webcam";

class Camera extends Component{
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        };
    }

    capture = () => {
        if(!this.state.completed){
          console.log("Tomaste una foto")
          const imageSrc = this.webcam.getScreenshot();
        }else{
          console.log("terminado");
          this.props.history.push('/final');
        }
        
    };

    render() {
        const videoConstraints = {
            width: 500,
            height: 1000,
            facingMode: "user"//{ exact: "environment" }//"user"
        };

        return(
            <div className='o-login-container'>                
                <div className="o-login-card">
                    <img src={require('../Images/logo.png')} alt="Logo" className="o-logo-login"/>
                    <div className="o-camera-container">
                        <Webcam
                            className="o-camera"
                            audio={false}
                            //height={"100%"}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={"100%"}
                            videoConstraints={videoConstraints}
                            mirrored = {true}
                        />
                    </div>

                    <div className="o-button-camera-container">
                        <p>Comprueba que eres tu</p>
                        <button className="o-camera-button" >
                            <img src={require('../Images/camara.png')} alt="Logo"/>
                        </button>
                        <p>Toma una foto</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Camera;