import './ActorDetailPage.css'
import { useParams } from "react-router-dom"

import MovieCard from '../../components/Movie/MovieCard';

export default function ActorDetailPage({movies}){
    const params = useParams();
    const actor = params.name;
    const actorMovies = movies.filter(movie => movie.cast.includes(actor))
    return (
        <main className="ActorDetailPage">
            <div className='top'>
                <h1 className='title'>{actor}</h1>
            </div>
            <div className='bottom'>
                <h3>Movies</h3>
                <ul className='movies'>
                    {actorMovies.map((movie,index) => (
                        <li key={index} className='detailMovies'>
                            <MovieCard movie={movie}/>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}