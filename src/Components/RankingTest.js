import React, { Component } from "react";
import './RankingTest.css';

import ButtonSecundary from './ButtonSecundary';
import RankingTestItem from './RankingTestItem';


class RankingTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        
        return(
            <div className="o-ranking-test-container">
                <p className="o-label-ranking-test">OTROS USUARIOS EN ESTE EXÁMEN</p>
                <RankingTestItem number="1" avatar={require("../Images/Avatares/050-sheep.svg")} name="Nombre I." points="500"></RankingTestItem>
                <RankingTestItem number="2" avatar={require("../Images/Avatares/038-scorpion.svg")} name="Nombre I." points="450"></RankingTestItem>
                <RankingTestItem number="3" avatar={require("../Images/Avatares/039-lobster.svg")} name="Nombre I." points="400"></RankingTestItem>
                <RankingTestItem number="4" avatar={require("../Images/Avatares/044-owl.svg")} name="Nombre I." points="350"></RankingTestItem>
                <RankingTestItem number="5" avatar={require("../Images/Avatares/045-rabbit.svg")} name="Nombre I." points="300"></RankingTestItem>
                <RankingTestItem number="6" avatar={require("../Images/Avatares/047-cow.svg")} name="Nombre I." points="280"></RankingTestItem>
                <RankingTestItem number="7" avatar={require("../Images/Avatares/035-caterpillar.svg")} name="Nombre I." points="250"></RankingTestItem>
                <RankingTestItem number="8" avatar={require("../Images/Avatares/042-bear.svg")} name="Nombre I." points="200"></RankingTestItem>
                <RankingTestItem number="9" avatar={require("../Images/Avatares/024-medusa.svg")} name="Nombre I." points="180"></RankingTestItem>
                <RankingTestItem number="10" avatar={require("../Images/Avatares/040-crab.svg")} name="Nombre I." points="150"></RankingTestItem>
                <div style={{height:"1em"}}></div>
                <ButtonSecundary text="VER MÁS" style="gray"></ButtonSecundary>
            </div>
        );
    }

}

export default RankingTest;