import React from 'react'
import { Link } from 'react-router-dom'
import { moviesList } from '../assets/mookData';



const Description = () => {
    var mov = moviesList.find(m => m.title == moviesList.title);
    var movieData;

    movieData = <div>
    <h3> {mov.title} </h3>
        {mov.Trailer}
    <p>{mov.Synopsis}</p>
    </div>;

    return (
        <div>
            <nav>
                <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>
                </ul>
            </nav>
            <div className='container'>
                {movieData}
            </div> 
        </div>
    )
}

export default Description
