import React, { Component } from 'react';
import './footerpartstyle.css';
import LinkedinPh from '../../Contact-Me-Photos/linkedin.svg';
import InstragramPh from '../../Contact-Me-Photos/Instagram.svg';
import FacebookPh from '../../Contact-Me-Photos/Facebok.svg';
import GithubPh from '../../Contact-Me-Photos/Github.svg'

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='footer-name'>
                    <h3>Onet Alexandra - Contact</h3>
                </div>
                <div className='contact-online-footer'>
                    <div className='container-footer-contact'>
                        <a href='https://www.linkedin.com/in/alexandra-voichi%C8%9Ba-one%C5%A3-9962ab141/' target="_blank">
                            <img className='footer-img' src={LinkedinPh}></img>
                        </a>
                    </div>
                    <div className='container-footer-contact'>
                        <a href='https://www.instagram.com/onet95.voi/' target="_blank">
                            <img className='footer-img' src={InstragramPh}></img>
                        </a>
                    </div>
                    <div className='container-footer-contact'>
                        <a href='https://www.facebook.com/oalexandra05' target="_blank">
                            <img className='footer-img' src={FacebookPh}></img>
                        </a>
                    </div>
                    <div className='ccontainer-footer-contact'>
                        <a className='find-mywork-link' href='https://github.com/alexandra-onet' target="_blank">
                            <img className='footer-img' src={GithubPh}></img>
                        </a>
                    </div>
                </div>
                <div className='footer-all-rights'>
                    <p>&copy;All Rights Reserved</p>
                    <p>2020</p>
                </div>
            </div>
        )
    }
}
export default Footer;
