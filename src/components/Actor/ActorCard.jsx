import { Link } from "react-router-dom"
import './ActorCard.css'

export default function ActorCard({actor}){

    return (
        <div className='ActorCard'>
            <div className="inner">
                <h4>{actor}</h4>
            </div>
        </div>
    )
}