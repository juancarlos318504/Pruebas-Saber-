import React, { Component } from "react";
import './BoxInfo.css';

const BoxInfo =(props)=> {

    const {image, color, tittle, toggle} = props;
    return(
        <div className="o-box-container">
            <div className="o-box-img" style={{backgroundColor:color}}>
                <img src={image} />
            </div>

            <p>{tittle}</p>
            {toggle? 
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>  :  ""}
            
            
        </div>
    );
}

export default BoxInfo;