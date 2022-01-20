import React from 'react';
import './AnimeCard.css';
import { Link } from "react-router-dom";
import Details from '../Details/Details';

function AnimeCard({anime}) {
    return (
      
        <article className="anime-card ">
            <a 
            href={anime.url}
            target="_blank"
            rel="noreferrer" >

                <figure>
                    <img 
                       src={anime.image_url}
                     alt="Anime-Image"/>
                </figure>
                <h3>
                    {anime.title}
                </h3>
            </a>
        </article>
        // <div className="container">
        //        <div className="Details">
        //        <div className="row">
              
        //       {
        //           Details.map(details => (
        //             <div className="col-lg-12 col-sm-6">
        //             <Link to={`/Details/${Details.anime.image_url}`}></Link>
        //         </div>
        //           ))
        //       }
            
        //   </div>
        //        </div>
           
        // </div>
                
    )
}

export default AnimeCard
