import React from 'react';
import './Button.css';

const ButtonSecundary = (props)=> {
  const {text, style} = props;
    const styleGray ={
        border: "2px solid #6D929E",
        backgroundColor: "#E6E7E8",
        borderRadius: "2em",
        
        height: "2.8em",
        marginBottom: "1em",
        fontFamily: "Bold",
        color: "#6D929E"
    }

    const styleWhite ={
      border: "3.5px solid var(--green_button)",
      borderRadius: "2em",
      padding: "0 1em",
      height: "3em",
      fontFamily: "Bold",
      color: "var(--green_button)",
      backgroundColor: "white"
   }

   const styleGreen ={
      border: "3.5px solid var(--green_button)",
      borderRadius: "2em",
      padding: "0 1em",
      height: "3em",
      fontFamily: "Bold",
      color: "white",
      backgroundColor: "var(--green_button)"
  }

  const styleAllWhite ={
    border: "3.5px solid white",
    borderRadius: "2em",
    padding: "0 1em",
    height: "3em",
    fontFamily: "Bold",
    color: "white",
    backgroundColor: "transparent"
 }

  return (  
      <button onClick={()=>props.onClick()} className="o-button-secundary" style={style=="gray"? styleGray : (style=="green"? styleGreen: (style=="allWhite"? styleAllWhite: styleWhite))}>{text}</button> 
  );
}

  export default ButtonSecundary;