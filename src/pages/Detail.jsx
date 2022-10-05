import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import tmdbApi from '../api/tmdbApi'
import apiConfig from '../api/apiConfing'
import MovieList from '../components/MovieList'
import { BsPlayFill, BsPlus, BsHandThumbsUp } from "react-icons/bs"

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            setItem(response);
        }
        getDetail();
    }, [category, id]);

    return (
        <>
            {
                item && (
                    <div className='detail-container'>
                        <div className='detail-hero'>
                            <div className='banner' style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }} />
                            <div className='backshadow' />
                            <div className='movie-info'>
                                <h1>
                                    {item.title || item.name}
                                </h1>
                                <div className='genres'>
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i}>{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p>{item.overview}</p>

                                <div className='btns'>
                                    <button><BsPlayFill />Reproducir</button>
                                    <span><BsPlus /></span>
                                    <span><BsHandThumbsUp /></span>
                                </div>
                            </div>
                        </div>

                        <div className='section'>
                            <h2>Películas Similares</h2>
                            <MovieList category={category} type='similar' id={item.id} />
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Detail;