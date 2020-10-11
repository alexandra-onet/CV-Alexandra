import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderPartStyle.css";

export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-content'>
                    <div className='header-burger-button'>
                        <Link className='button-header-container'
                            to='/'>
                            <button className='button-header-content '>Home</button>
                        </Link>
                        <Link className='button-header-container'
                            to='/Aboutme'>
                            <button className='button-header-content '>About me</button>
                        </Link>
                        <Link className='button-header-container'
                            to='/Myskills'>
                            <button className='button-header-content '>My Skills</button>
                        </Link>
                        <Link className='button-header-container'
                            to='/Contact'>
                            <button className='button-header-content '>Contact</button>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}