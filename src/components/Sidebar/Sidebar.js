import React from 'react'
import './Sidebar.css'
// import {Container} from "react-router-dom";
function Sidebar({topAnime}) {
    return (
       <div className="container">
       <aside>
           <nav>
               <h3>Top Anime</h3>
               {topAnime.map(anime => ( <article className="anime-card">
               <a href={anime.url}
               target="_blank"
               key={anime.mal_id}
               rel="noreferrer" >

                <figure>
                    <img 
                       src={anime.image_url}
                     alt="Anime Image"/>
                </figure>
                <h3>
                    {anime.title}
                </h3>
                  
                    {/* {<img src={anime.image_url}></img>}

                
                  {anime.title} */}
               </a>
               </article>
                ) )}
           </nav>
       </aside>
       </div>

    )
}

export default Sidebar
