import React from 'react';
import './CardSubscribe.css';
import './Button.css'

import ButtonSecundary from './ButtonSecundary';
import BoxInfo from './BoxInfo';

const CardSubscribe = (props)=> {
  const {tittle, image, certificates} = props;
  return (  
      <div className="o-card-subscribe">
            <BoxInfo toggle={false} image={image} tittle={tittle} color="white"></BoxInfo>
            <button className="o-button-secundary o-button-subscribe">INSCRÍBETE</button> 
            <div className="o-line-subscribe"></div>
            <div className="o-certificates-label-container">
                <img src={require('../Images/IconCertificadosLabel.svg')}></img>
                <p>{certificates+ ' Certificados'}</p>
            </div>
      </div> 
  );
}

  export default CardSubscribe;