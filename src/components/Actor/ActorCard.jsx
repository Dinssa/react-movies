import { Link } from "react-router-dom"
import './ActorCard.css'

export default function ActorCard({actor}){

    const randomPic = `https://picsum.photos/seed/${Math.random()}/200/300`

    const background = {
        backgroundImage: `url(${randomPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className='ActorCard'>
            <Link to={`/actor/${actor}`} className="inner" style={background}>
                <h3>{actor}</h3>
            </Link>
        </div>
    )
}