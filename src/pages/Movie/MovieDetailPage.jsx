import './MovieDetailPage.css'
import { useParams } from "react-router-dom"

export default function MovieDetailPage({movies}){
    const params = useParams();
    const movie = movies.find(movie => movie.title === params.movieTitle)
    return (
        <main className="MovieDetailPage">
            <img className='cover' src={movie.posterPath} alt={movie.title}/>
            <div className='right'>
                <h1 className='title'>{movie.title}</h1>
                <p className='release'>Release Date: {movie.releaseDate}</p>
                <p className='cast'><b>Cast:</b> {movie.cast.join(", ")}</p>
            </div>
        </main>
    )
}