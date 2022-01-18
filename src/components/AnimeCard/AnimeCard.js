import React from 'react';
import Selected from "../Selected/Selected";
import './AnimeCard.css';

function AnimeCard({anime}) {
    return (
        // <Selected></Selected>
        <article className="anime-card">
            <a 
            href={anime.url}
            target="_blank"
            rel="noreferrer" >

                <figure>
                    <img 
                       src={anime.image_url}
                     alt="Anime Image"/>
                </figure>
                <h3>
                    {anime.title}
                </h3>
            </a>
        </article>
                
    )
}

export default AnimeCard
