import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsPerson } from "react-icons/bs"
import { CgMenuLeft, CgClose } from "react-icons/cg"
import { RiHome5Fill, RiTvFill, RiFilmFill, RiHistoryLine, RiStarFill, RiBookmark2Line, RiDownload2Line, RiSettings3Line, RiErrorWarningLine } from "react-icons/ri"
import Logo from '../assets/netflixlogo.png'

const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className={color ? 'navbar navbar-scroll' : 'navbar'}>
                <img className='logo' src={Logo} alt='logo' />

                <div className='nav-right'>
                    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                    <NavLink activeClassName='active' to='/movie'>Películas</NavLink>
                    <NavLink activeClassName='active' to='/tv'>Series</NavLink>

                    <div className='btns'>
                        <BsPerson />
                    </div>
                </div>

                <div className='btn-mobile' onClick={showSidebar}><CgMenuLeft /></div>
            </div>

            <div className={sidebar ? 'sidebar-mobile sidebar-mobile-active' : 'sidebar-mobile'}>
                <div className='btn-mobile-close' onClick={showSidebar}><CgClose /></div>
                <div className="sidebar-links">
                    <div className='links'>
                        <NavLink exact activeClassName='active' to='/' onClick={showSidebar}><RiHome5Fill />Home</NavLink>
                        <NavLink activeClassName='active' to='/movie' onClick={showSidebar}><RiFilmFill />Películas</NavLink>
                        <NavLink activeClassName='active' to='/tv' onClick={showSidebar}><RiTvFill />Series</NavLink>
                    </div>
                    <span className='line' />
                    <div className='links'>
                        <a to='/' onClick={showSidebar}><RiHistoryLine />Recientes</a>
                        <a to='/' onClick={showSidebar}><RiBookmark2Line />Bootmark</a>
                        <a to='/' onClick={showSidebar}><RiStarFill />Destacados</a>
                        <a to='/' onClick={showSidebar}><RiDownload2Line />Descargas</a>
                    </div>
                    <span className='line' />
                    <div className='links'>
                        <a to='/' onClick={showSidebar}><RiSettings3Line />Ajustes</a>
                        <a to='/' onClick={showSidebar}><RiErrorWarningLine />Ayuda</a>
                    </div>
                    <button onClick={showSidebar}>Iniciar sesión</button>
                </div>
            </div>
        </>
    )
}

export default Navbar