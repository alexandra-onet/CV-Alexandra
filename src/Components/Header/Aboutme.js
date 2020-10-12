import React, { Component, useState } from "react";
import "./HeaderPartStyle.css";
import './aboutmestyle.css';
import './responsive.css';
import FirstImg from '../../Photos/15.JPG';
import SecondImg from '../../Photos/18.jpg';
import AddressPhoto from '../../Contact-Me-Photos/Address.svg';
import Dateofbirth from '../../Contact-Me-Photos/DOB.svg';
import PhoneNumber from '../../Contact-Me-Photos/Phone.svg';
import EmailPhoto from '../../Contact-Me-Photos/Email.svg';
import NamePhoto from '../../Contact-Me-Photos/name.svg';

export default class Aboutme extends Component {

    render() {
        return (
            <div className='aboutme-content'>
                <div className='img-details'>
                    <div>
                        <img className='img-photo-aboutme-first' src={FirstImg}></img>
                    </div>
                    <div className='entrance-text'>
                        <h2>Hi, </h2>
                        <p id='welcome-resume'>Welcome to my online resume, my name is Alexandra Onet.</p>
                        <p id='job-resume'>I'm a Junior Front-End Developer, a motivated and open minded person.</p>
                        <h5 id='title-motto-resume'>Motto that represents me</h5>
                        <p id='motto-resume'>"Only those who will risk going too far can possibly find out how far one can go"- Thomas Stearns Eliot </p>
                    </div>
                </div>
                <div className='personal-details'>
                    <div className='personal-details-img'>
                        <img className='img-personal-details' src={SecondImg} ></img>
                    </div>
                    <div className='name-surname'>
                        <h2>Personal details</h2>
                    </div>
                    <div className='personaldetails-logo'>
                        <div className='name'>
                            <img className='img-name' src={NamePhoto}></img>
                            <p className='txt-name'>Alexandra Voichița Oneț</p>
                        </div>
                        <div className='date-of-birth'>
                            <img className='img-dob' src={Dateofbirth}></img>
                            <p className='txt-dob'> 05 DECEMBER 1995</p>
                        </div>
                        <div className='address'>
                            <img className='img-address' src={AddressPhoto}></img>
                            <p className='txt-address'>Cluj Napoca, Cluj,</p>
                            <p className='txt-address'>Street Parang </p>
                        </div>
                        <div className='phone-number'>
                            <img className='img-phone' src={PhoneNumber}></img>
                            <p className='txt-phone'>0749-xxx-xxx</p>
                        </div>
                        <div className='email'>
                            <img className='img-email' src={EmailPhoto}></img>
                            <p className='txt-email'>alexandra.onet05@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='education-details'>
                    <h2>Education</h2>
                    <div className='education-content'>
                        <div className='year'>
                            <p>2020</p>
                            <p>2015-2019</p>
                        </div>
                        <div className='speciality'>
                            <h5>Scoala informala de IT </h5>
                            <p>Web Development (JavaScript)</p>
                            <h5>Faculty of Chemistry and Chemical Engineering</h5>
                            <p>Specialization: Engineering and Information Technology of Chemical and Biochemical Processes</p>
                        </div>
                    </div>
                </div>
                <div className='hobbies-details'>
                    <h2>Hobbiess</h2>
                    <div className='hobbies-content'>
                        <div className='each-hobbie'>
                            <h3>Traveling</h3>
                            <div id='traveling-hobbie'>
                            </div>
                        </div>
                        <div className='each-hobbie'>
                            <h3>Reading</h3>
                        </div>
                        <div className='each-hobbie'>
                            <h3>Organizing</h3>
                        </div>
                        <div className='each-hobbie'>
                            <h3>Cooking</h3>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}