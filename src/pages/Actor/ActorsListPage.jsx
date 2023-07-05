import ActorCard from "../../components/Actor/ActorCard";
import './ActorsListPage.css'

export default function ActorsListPage({movies}){

    let actors = movies.map(movie => movie.cast)
                    .flat()
                    .filter((actor, index, self) => self.indexOf(actor) === index)
                    .sort((a,b)=> a.localeCompare(b));

    console.log(actors)

    return (
        <main className="ActorsListPage">
            <h1>Actor List Page</h1>
            <ul className="ActorsList">
                {actors.map(actor => (
                    <li key={actor} className="Actor">
                        <ActorCard actor={actor}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}