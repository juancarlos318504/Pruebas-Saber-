import React from 'react';
import './RankingTestItem.css';

const RankingTestItem = (props)=> {
  const {number, avatar, name, points} = props;
  return (  
      <div className="o-ranking-test-item-container">
          <div className="o-item-ranking-number"><p>{number}</p></div>
          <img className="o-avatar-img" src={avatar}></img>
          <div className="o-card-item-ranking">
            <h3>{name}</h3>
            <div></div>
            <p>{points + ' puntos'}</p>
          </div>
      </div> 
  );
}

  export default RankingTestItem;