import React from 'react';
import './Button.css';

const ButtonPrimary = (props)=> {
  const {text, margin, color, padding} = props;
  return (  
      <button className="o-button-primary" style={{margin:margin, backgroundColor: "var(--"+ color+ ")", padding:padding}}>{text}</button> 
  );
}

  export default ButtonPrimary;