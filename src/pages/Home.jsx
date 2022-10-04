import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Background from '../assets/bg-2.jpg'
import MovieList from '../components/MovieList'
import { category, movieType, tvType } from '../api/tmdbApi'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='hero-container'>
                <img src={Background} alt="bg" />
                <div className='backshadow' />
                <div className='hero-desc'>
                    <h1>Películas y series ilimitadas y mucho más.</h1>
                    <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>

                    <div className='hero-start'>
                        <input type="text" placeholder='ejemplo@gmail.com' />
                        <button>Comenzar</button>
                    </div>
                </div>

                <div className='social-btns'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>

            <div className="movies-container">
                <div className="section">
                    <div className="section-header">
                        <h2>Películas Populares</h2>
                        <Link to="/movie">Ver todo</Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section">
                    <div className="section-header">
                        <h2>Películas Mejor Calificadas</h2>
                        <Link to="/movie">Ver todo</Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section">
                    <div className="section-header">
                        <h2>Series Populares</h2>
                        <Link to="/series">Ver todo</Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section">
                    <div className="section-header">
                        <h2>Series Mejor Calificadas</h2>
                        <Link to="/series">Ver todo</Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </div>
    )
}

export default Home