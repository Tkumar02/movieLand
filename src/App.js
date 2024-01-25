import React from 'react';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ffc5852a'

const Movie2 = {
    "Title": "Jumanji",
    "Year": "1995",
    "imdbID": "tt0113497",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');
  
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
        console.log(data, 'and', data.Search);
    }

    // useEffect(()=>{
    //     searchMovies('Jumanji')
    // },[]);

    return(
        <div className='app'>

            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                placeholder='Search for Movies'
                value = {searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt='Search'
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                <div className='container'>
                    {/* <MovieCard Movie1={movies[0]} /> */}
                    {movies.map((Movie1)=> (
                        <MovieCard Movie1={Movie1}/>
                    ))}
                </div>
                ) :
                (
                <div>
                    <h2>No Movies Found</h2>
                </div>
            )}

            

        </div>
    );
}

export default App;