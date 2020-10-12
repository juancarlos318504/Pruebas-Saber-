import React from 'react';
import './CardTest.css';
import { withRouter, Link } from "react-router-dom";

import ButtonSecundary from './ButtonSecundary';

const CardTest = (props)=> {
  const {tittle, icon, imgProgress, percent, nivel, history, tittleLabel} = props;
  return (  
      <div className="o-card-test">
          <div className="o-tittle-card">
            <img className="o-icon-card" src={icon}></img>
            <h3>{tittle}</h3>
          </div>

          <h2 className ="o-level-label">{nivel}</h2>
          <div className="o-image-progress">
            <img  src={imgProgress}></img>
            <div className="o-progress-info">
                <h2>{percent}</h2>
                <p>De avance en el nivel</p>
            </div>
          </div>
          
          <Link to={{pathname:'/nivel', data:{tittle:tittleLabel}}} style={{textDecoration:'none', width:"100%"}}>
            <ButtonSecundary  onClick={()=>console.log("nivel")} text="PRESENTAR EXAMEN" style="gray"></ButtonSecundary>
          </Link>
          
      </div> 
  );
}

  export default CardTest;