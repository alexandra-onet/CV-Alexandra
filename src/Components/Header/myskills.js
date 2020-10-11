import React, { Component } from "react";
import "./HeaderPartStyle.css";
import './responsive.css';
import GithubPhoto from '../../Contact-Me-Photos/Github.svg'


export default class Myskills extends Component {
    render(
    ) {
        return (
            <div>
                <div className='myskills-content'>
                    <h2>SOFT SKILLS</h2>
                    <div className='soft-skills-content'>
                        <li>
                            <h3>HTML</h3><span className='bar'>90% <span className='html'></span></span>
                        </li>
                        <li>
                            <h3>CSS</h3><span className='bar'>65%<span className='css'></span></span>
                        </li>
                        <li>
                            <h3>JS</h3><span className='bar'>50%<span className='js'></span></span>
                        </li>
                        <li>
                            <h3>REACT</h3><span className='bar'>50%<span className='react'></span></span>
                        </li>
                    </div>
                </div>
                <div className='language-skills'>
                    <h2>LANGUAGE SKILLS</h2>
                </div>
                <div className='language-skills-content'>
                    <li>
                        <h3>Romanian</h3><span className='bar'> <span className='romanian'></span></span>
                    </li>
                    <li>
                        <h3>English</h3><span className='bar'>80% <span className='english'></span></span>
                    </li>
                </div>
                <div className='mywork-skills'>
                    <h2>MY WORK</h2>
                </div>
                <div className='mywork-content'>
                    <div className='find-mywork'>
                        <a className='find-mywork-link' href='https://github.com/alexandra-onet' target="_blank">
                            <img className='github-mywork' src={GithubPhoto}></img>
                            <p className='click-me-github'>Click Me !</p>
                            <p className='mywork-title'>Here you can find my project</p>
                        </a>
                    </div>
                    <a className='link-to-mywork' href='https://github.com/bndiana/movieandchill' target="_blank">
                        <li>
                            <h3>FINAL TEAM PROJECT</h3>
                            <p className='mywork-link'>https://github.com/bndiana/movieandchill</p>
                        </li>
                    </a>
                    <a className='link-to-mywork' href='https://github.com/alexandra-onet/cv-alexandra' target="_blank" >
                        <li>
                            <h3>RESUME PROJECT</h3>
                            <p className='mywork-link'>https://github.com/alexandra-onet/cv-alexandra</p>
                        </li>
                    </a>
                </div>
            </div>
        )
    }
}