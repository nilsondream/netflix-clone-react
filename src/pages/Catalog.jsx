import React from 'react'
import { useParams } from 'react-router'
import { category as cate } from '../api/tmdbApi'
import Background from '../assets/duotone.png'
import MovieGrid from '../components/MovieGrid'

const Catalog = () => {

    const { category } = useParams();

    return (

        <div className='catalog-container'>
            <div className='category-container'>
                <img src={Background} alt='bg' />
                <div className='backshadow' />
                <h1>{category === cate.movie ? 'Películas' : 'Series'}</h1>
            </div>
            <MovieGrid category={category} />
        </div>

    );
}

export default Catalog;