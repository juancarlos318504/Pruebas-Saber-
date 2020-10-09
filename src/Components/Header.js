import React, { Component } from "react";
import './Header.css';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const {content, heigth} = this.props;
        return(
            <div className="o-header" style={{height:heigth}}>
                <img src={require('../Images/logo.svg')} alt="Logo" className="o-logo"/>
                <div className="o-content-header" >
                    {content}
                </div>
            </div>
        );
    }

}

export default Header;