import React from 'react';

const FEATURED_API = "http://161.35.140.236:9005/api/movies/now_playing?page=1";

const Movie = () => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    return(
   <div>una película</div>
    )
}

export default Movie;