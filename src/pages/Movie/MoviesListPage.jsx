import './MoviesListPage.css'

import MovieCard from "../../components/Movie/MovieCard"

export default function MoviesListPage({movies}){
    return (
        <main className="MoviesListPage">
            <h1>Movies List Page</h1>
            <ul className="MoviesList">
                {movies.map(movie => (
                    <li key={movie.id} className="Movie">
                        <MovieCard movie={movie}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}