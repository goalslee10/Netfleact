import React, { useState, useEffect }from 'react'
import './Banner.css'
import axios from '../axios';
import requests from '../requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // 화면이 초기에 랜더링된 직후 한 번 호출

        // API 서버에 데이터 요청하는 부분
        async function fetchData() {
            
            // 비동기 요청으로 받아온 응답 데이터
            const request = await axios.get(requests.fetchNetflixOriginals);
             // -> https://api.themoviedb.org/3 + /discover/tv?api_key=${API_KEY}&with_networks=213
            
             const randomMovie = request.data.results[0];
             setMovie(randomMovie);
        }

        fetchData();
        console.log(movie);
    }, []);

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, // ?. == optional chainning -> 에러는 뜨게 하지 않는 것(이미지 있어도 되고 없어도 되고)
        backgroundPosition: "center center"
    }}>
        {/* Background Image */}
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className='banner__button'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            {/* description */}
            <h1 className='banner__description'>
            {movie?.overview}
            </h1>
        </div>

        <div className='banner__fadeBotton'></div>
    </header>
  )
}

export default Banner