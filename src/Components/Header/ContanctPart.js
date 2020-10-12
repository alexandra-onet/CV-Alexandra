import React, { Component } from "react";
import "./HeaderPartStyle.css";
import './responsive.css';
import PhoneImg from '../../Contact-Me-Photos/Phone.svg';
import EmailImg from '../../Contact-Me-Photos/Email.svg';
import LinkedinImg from '../../Contact-Me-Photos/linkedin.svg';
import InstragramImg from '../../Contact-Me-Photos/Instagram.svg';
import FacebbokImg from '../../Contact-Me-Photos/Facebok.svg'


export default class Contact extends Component {

    render() {
        return (
            <div className='contact-content'>
                <div>
                    <h1>CONTACT DETAILS</h1>
                    <div className='contactme'>
                        <div className='contact-real'>
                            <div className='container-contact'>
                                <img className='contact-img' src={PhoneImg}></img>
                                <p>0749-xxx-xxx</p>
                            </div>
                            <div className='container-contact'>
                                <img className='contact-img' src={EmailImg}></img>
                                <p>alexandra.onet05@gmail.com</p>
                            </div>
                        </div>
                        <div className='contact-online'>
                            <div className='container-contact'>
                                <a href='https://www.linkedin.com/in/alexandra-voichi%C8%9Ba-one%C5%A3-9962ab141/' target="_blank">
                                <img className='contact-img' src={LinkedinImg}></img>
                                </a>
                            </div>
                            <div className='container-contact'>
                            <a href='https://www.instagram.com/onet95.voi/' target="_blank">
                                <img className='contact-img' src={InstragramImg}></img>
                                </a>
                            </div>
                            <div className='container-contact'>
                            <a href='https://www.facebook.com/oalexandra05' target="_blank">
                            <img className='contact-img' src={FacebbokImg}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}