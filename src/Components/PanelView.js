import React, { Component } from "react";
import './PanelView.css';

import Header from './Header'
import Menu from './Menu'
import AditionalPanel from './AditionalPanel';

const PanelView =(props)=> {

    const {headerInfo, RigthPanel, PanelInfo} = props;
    return(
        <div className="o-principal-panel">
            <div className="o-left-panel">
                <div className="o-left-container">
                    <Header content={headerInfo} heigth={"15%"}></Header>
                    <div className="o-content-container">
                        <div className="o-menu-container">
                            <Menu></Menu>
                        </div>

                        <div className="o-info-container">
                            {PanelInfo}
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="o-rigth-panel">
                {RigthPanel}
            </div>
        </div>
    );
}

export default PanelView;