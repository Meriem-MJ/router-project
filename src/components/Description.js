import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { moviesList } from '../assets/mookData'
import v5 from '.././video-5.mp4'



class Description extends Component {
    constructor(props){
        super(props);
    }
    render(){
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
                
                <h1>
                {moviesList.map(active => active.title)}
                </h1>
                {moviesList.map(V => <video src={V.Trailer} autoPlay controls/>)}
                <p>

                </p>
            </div>
        </div>
    )
}
}

export default Description
