import React from 'react';
import './AnimeCard.css';
import {Link} from "react-router-dom";

function AnimeCard({anime,id}) {
    return (
      
        <article className="anime-card ">
            <Link to={`/details/${id}`}
               rel="noreferrer" >
                <figure>
              
                    <img 
                       src={anime.image_url}
                     alt="Anime-Image"></img>
                </figure>
                <h3>
                    {anime.title}
                </h3>
            </Link>
        </article>
                
    )
}

export default AnimeCard
