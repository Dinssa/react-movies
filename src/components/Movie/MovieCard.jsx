import { Link } from "react-router-dom"
import './MovieCard.css'

export default function MovieCard({movie}){

    const background = {
        backgroundImage: `url(${movie.posterPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '200px'
    }

    return (
        <Link to={`/movies/${movie.title}`} className='MovieCard' style={background}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.releaseDate}</p>
        </Link>
    )
}