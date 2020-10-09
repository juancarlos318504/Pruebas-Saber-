import React, { Component } from "react";
import './Login.css';
import ButtonPrimary from '../Components/ButtonPrimary'


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return(
            <div className='o-login-container'>                
                <div className="o-login-card">
                    <img src={require('../Images/logo.png')} alt="Logo" className="o-logo-login"/>
                    <form onSubmit={this.login} className="o-form-login" >
                        <select required>
                            <option value="" selected>Tipo de documento</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="CE">Cédula de extranjería</option>
                            <option value="CR">Contraseña registraduría</option>
                            <option value="PC">Pasaporte colombiano</option>
                            <option value="PE">Pasaporte extranjero</option>
                            <option value="PP">Permiso especial de permanencia</option>
                            <option value="NESC">Número establecido por la secretaría de educación</option>
                            <option value="CCa">Certificado de cabildo</option>
                            <option value="NUIP">Número único de identificación personal</option>
                            <option value="NIP">Número de identificación personal</option>
                            <option value="RI">Registro civil</option>

                            <img src={require('../Images/flecha.png')}/>
                        </select>
                        <input type='number' placeholder="Número de documento" name="numero-documento" required/>
                        <input type='password' placeholder="Contraseña" autoComplete="new-password" name="contraseña" required/>
                        <ButtonPrimary type='submit' text="INGRESAR" margin="4em 10em" color="green_button" padding="0.8rem 0"></ButtonPrimary>
                        
                    </form>
                </div>
            </div>
        );
    }

}

export default Login;