import './MoviesListPage.css'

import MovieCard from "../../components/Movie/MovieCard"

export default function MoviesListPage({movies}){
    return (
        <main className="MoviesListPage">
            <h1>Movies List Page</h1>
            <ul className="MoviesList">
                {movies.map((movie, index)=> (
                    <li key={index} className="Movie">
                        <MovieCard movie={movie}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}