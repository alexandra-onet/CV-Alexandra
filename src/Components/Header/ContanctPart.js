import React, { Component } from "react";
import "./HeaderPartStyle.css";
import './responsive.css';
import PhoneImg from '../../Contact-Me-Photos/Phone.svg';
import EmailImg from '../../Contact-Me-Photos/Email.svg';
import LinkedinImg from '../../Contact-Me-Photos/linkedin.svg';
import InstragramImg from '../../Contact-Me-Photos/Instagram.svg';
import FacebbokImg from '../../Contact-Me-Photos/Facebok.svg'
import emailjs from 'emailjs-com';

export default class Contact extends Component {
    sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_obz8e4q', e.target, 'user_1ACseyVKHUYiFSYQUmV45')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
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
                <div>
                <h1>SEND MESSAGE</h1>
                <form className='send-email' onSubmit={this.sendEmail}>
                <div className="row pt-5 mx-auto">
                        <div className="content-sendemail">
                            <input type="text" className="container-sendemail" placeholder="Name" name="name"/>
                        </div>
                        <div className="content-sendemail">
                            <input type="email" className="container-sendemail" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="content-sendemail">
                            <input type="text" className="container-sendemail" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="content-sendemail">
                            <textarea className="container-sendemail" cols="30" rows="5" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="content-sendemail">
                            <input type="submit" className="button-sendemail" value="Send Message"></input>
                        </div>
                    </div>
                </form>


                </div>

            </div>
        )
    }
}