import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsPerson } from "react-icons/bs"
import { CgMenu, CgClose } from "react-icons/cg"
import { RiHome5Fill, RiTvFill, RiFilmFill, RiHistoryLine, RiStarFill, RiBookmarkLine, RiDownload2Line, RiSettings3Line, RiErrorWarningLine } from "react-icons/ri"
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

                <div className='btn-mobile' onClick={showSidebar}><CgMenu /></div>
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
                        <span onClick={showSidebar}><RiHistoryLine />Recientes</span>
                        <span onClick={showSidebar}><RiBookmarkLine />Guardados</span>
                        <span onClick={showSidebar}><RiStarFill />Destacados</span>
                        <span onClick={showSidebar}><RiDownload2Line />Descargas</span>
                    </div>
                    <span className='line' />
                    <div className='links'>
                        <span onClick={showSidebar}><RiSettings3Line />Ajustes</span>
                        <span onClick={showSidebar}><RiErrorWarningLine />Ayuda</span>
                    </div>
                    <button onClick={showSidebar}>Iniciar sesión</button>
                </div>
            </div>
        </>
    )
}

export default Navbar