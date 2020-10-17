import React, { Component } from "react";
import './homepagestyles.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage-container'>
                <React.Fragment>
                    <div className='homepage-content'>
                        <div className='logo-name'>
                            <div className='alexandra-name'>
                                <p>Alexandra</p>
                            </div>
                        </div>
                        <div className='homepage-description'>
                            <div className='motto-container'>
                                <div className='motto-background1'></div>
                                <div className='motto-content'>
                                    <p>OPEN MINDED, 
                                         PASSIONATE, 
                                         FLEXIBLE 
                                         AND 
                                         EXTREMELY
                                         MOTIVATED</p>
                                </div>
                                <div className='motto-background2'></div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}