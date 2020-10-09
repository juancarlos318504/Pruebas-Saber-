import React from 'react';
import './CardTest.css';

import ButtonSecundary from './ButtonSecundary';

const CardTest = (props)=> {
  const {tittle, icon, imgProgress, percent, nivel} = props;
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
          
          <ButtonSecundary text="PRESENTAR EXAMEN" style="gray"></ButtonSecundary>
      </div> 
  );
}

  export default CardTest;