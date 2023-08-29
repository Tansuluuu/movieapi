import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import './style.css'
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader";

const MoviePage = () => {
    const [movie, setMovie]= useState({})
    const {movieId} = useParams()
    const [error, setError] = useState(false)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?language=ru-RUS&api_key=26308f389ea8d37844b5c2e0a4d11d75`)
            .then(res => setMovie(res.data))
            .catch(err => setError(true))
            axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ru-RUS&api_key=26308f389ea8d37844b5c2e0a4d11d75`)
                .then(res => console.log(res.data))
    },[movieId])
    if(movie.id && !error){
        return (
            <Layout fullPage={true}>
                <div style={{
                    background: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                    backgroundSize:'cover',
                    backgroundPosition:"center",
                    paddingTop: '50px',
                    position: "relative",
                }}>
                    <div className={'image-filter'}></div>
                <div className={'container'}
                    style={{
                        position:"relative",
                        zIndex: 4,
                    }}
                >
                    <div className={'inner-wrapper'}>
                        <img className={'movie-img'} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=''/>
                        <div className={'movie-info-wrapper'}>
                            <h1 className={'movie-title'}>{movie.title}</h1>
                            <p className={'movie-description'}>{movie.overview}</p>
                        </div>
                    </div>
                </div>
                </div>
            </Layout>
        );
    }else {
        return (
            <Loader/>
        )
    }
};

export default MoviePage;