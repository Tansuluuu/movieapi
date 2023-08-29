import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({movies}) => {
    return (
        <Swiper className="mySwiper">
            {
                movies.results && movies.results.map(movie =>
                    <SwiperSlide key={movie.id}>
                       <div className={'swiper-box'}>
                           <img className={'backdrop-img'} src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt=''/>
                           <div className={'carousel-sticker'}>
                               <h3>{movie.title}</h3>
                               <p>{movie.overview}</p>
                           </div>
                       </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Carousel;