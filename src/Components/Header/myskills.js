import React, { Component } from "react";
import "./HeaderPartStyle.css";
import './responsive.css';
import Item from './item'
import GithubPhoto from '../../Contact-Me-Photos/Github.svg'
import Previous from '../../Mywork-photo/previous.png';
import Next from '../../Mywork-photo/next.png';
import Carousel from 'react-elastic-carousel';
import AddmoviePage from '../../Mywork-photo/AddmoviePage.png';
import AllmoviesPage from '../../Mywork-photo/AllmoviesPage.png';
import HomePage from '../../Mywork-photo/HomePage.png';
import LoginPage from '../../Mywork-photo/LoginPage.png';

export default class Myskills extends Component {
    breakPoints = [
        { width: 1000, itemsToShow: 1 },
        { width: 2000, itemsToShow: 2 },
        { width: 3000, itemsToShow: 3 },
        { width: 4000, itemsToShow: 4 },
    ]
    render(
    ) {
        return (
            <div>
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

                    <h3>FINAL TEAM PROJECT - MOVIE AND CHILL</h3>
                    <a className='link-to-mywork' href='https://github.com/bndiana/movieandchill' target="_blank">
                        <p className='mywork-link'>https://github.com/bndiana/movieandchill</p>
                    </a>
                    <div className='carousel-content'>
                        <Carousel className='movieandchill-carousel' breakPoints={this.breakPoints}>
                            <Item>
                                <div className='carousel-item' >
                                    <p>Home Page</p>
                                    <img src={HomePage}></img>
                                </div>
                            </Item>
                            <Item>
                                <div className='carousel-item' >
                                    <p>Login Page</p>
                                    <img src={LoginPage}></img>
                                </div>
                            </Item>
                            <Item>
                                <div className='carousel-item' >
                                    <p>All movies Page</p>
                                    <img src={AllmoviesPage}></img>
                                </div>
                            </Item>
                            <Item>
                                <div className='carousel-item' >
                                    <p>Add movie Page</p>
                                    <img src={AddmoviePage}></img>
                                </div>
                            </Item>
                        </Carousel>
                    </div>

                    {/* <a className='link-to-mywork' href='https://github.com/alexandra-onet/cv-alexandra' target="_blank" >
                        <li>
                            <h3>RESUME PROJECT</h3>
                            <p className='mywork-link'>https://github.com/alexandra-onet/cv-alexandra</p>
                        </li>
                    </a> */}
                </div>
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

            </div>
        )
    }
}