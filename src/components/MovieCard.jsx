import React from 'react'
import { Link } from 'react-router-dom'
import { category } from '../api/tmdbApi'
import apiConfig from '../api/apiConfing'
import { BsPlayCircle } from 'react-icons/bs';

const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className='movie-card' style={{backgroundImage: `url(${bg})`}}>
                <div className='shadow'/>
                <BsPlayCircle />
            </div>
            <p className='movie-title'>{item.title || item.name}</p>
        </Link>
    );
}

export default MovieCard;