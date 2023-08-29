import Layout from "../../components/Layout";
import React, {useEffect, useState} from "react";
import axios from "axios";
import List from "../../components/List";
import Carousel from "../../components/Carousel";

const HomePage = () => {
  const [movies, setMovies] = React.useState([])
    const [page, setPage] = useState(1)
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=${page}&api_key=26308f389ea8d37844b5c2e0a4d11d75`)
        .then(res=> setMovies(res.data))
        .catch(err => console.log(err))
  },[page])

  return(
    <Layout>
         <div className={'carousel-wrapper'}>
             <Carousel movies={movies}/>
         </div>
        <div className={'container'}>
          <List movies={movies}/>

        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        </div>
    </Layout>
  );
};
export default HomePage