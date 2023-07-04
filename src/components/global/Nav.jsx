import './Nav.css'

import { Link } from 'react-router-dom';


export default function Nav(){
    return(
        <nav>
            <ul className='NavList'>
                <li className='NavItem'><Link to="/">Movies</Link></li>
                <li className='NavItem'><Link to="/actors">Actors</Link></li>
            </ul>
        </nav>
    )
}