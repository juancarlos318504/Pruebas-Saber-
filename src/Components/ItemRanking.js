import React from 'react';
import './ItemRanking.css';

const ItemRanking = (props)=> {
  const {number, certificates, points} = props;
  return (  
      <div className="o-item-container">
          <div className="o-item-user">
            <div className="o-item-number"><p>{number}</p></div>
            <img src={require('../Images/userRanking.svg')}/>
            <h3> Nombre de usuario </h3>
          </div>
          <p className="o-number-certificates">{certificates + ' certificados'}</p>
          <p className="o-number-points">{points + ' puntos'}</p>
      </div> 
  );
}

export default ItemRanking;