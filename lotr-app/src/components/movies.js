import React, { useState, useEffect } from 'react';

function Movies(props) {
    const [movie, setMovie] = useState();
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DiECrQwsj2zDY2MhaCeg'
        }
        const fetchData = async () => {
            const rawMovies = await fetch('https://the-one-api.dev/v2/movie', { headers: headers })
            const movies = await rawMovies.json();
            const movie = movies.docs[Math.floor(Math.random() * movies.docs.length)];
            setMovie(movie.name)
        }

        fetchData()
    })

    return (
        <div>
            {movie}
        </div>
    )
}

export default Movies;