import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/netflixlogowhite.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-grid'>

                <div className='footer-logo'>
                    <Link className='logo' to={'/'}><img src={Logo} alt='logo' /></Link>
                    <p>
                        Enjoy all the movies and series we have for you.
                        Do not forget that we have offers for the whole year,
                        follow the best programming in the catalog.
                    </p>
                </div>
                
                <div className='footer-links'>
                    <p>Explore</p>
                    <span>Home</span>
                    <span>About</span>
                    <span>Movie & Series</span>
                </div>

                <div className='footer-links-gap'>
                    <div className='footer-links'>
                        <p>Visit</p>
                        <span>Los Gatos, California</span>
                        <span>Incorporated: August 10, 1887</span>
                        <span>ZIP Codes: 95030–95033</span>
                    </div>
                    <div className='footer-links'>
                        <p>New Business</p>
                        <span>netflix@support.com</span>
                        <span>123 456 789</span>
                    </div>
                </div>

                <div className='footer-links'>
                    <p>Follow</p>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                </div>

                <div className='footer-links'>
                    <p>Legal</p>
                    <span>Terms</span>
                    <span>Privacy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer