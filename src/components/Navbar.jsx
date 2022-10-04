import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai"
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

    return (
        <div className={color ? 'navbar navbar-scroll' : 'navbar'}>
            <Link className='logo' to={'/'}><img src={Logo} alt='logo' /></Link>

            <div className='nav-right'>
                <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                <NavLink activeClassName='active' to='/movie'>Películas</NavLink>
                <NavLink activeClassName='active' to='/tv'>Series</NavLink>

                <div className='btns'>
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    )
}

export default Navbar