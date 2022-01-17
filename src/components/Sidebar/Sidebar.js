import React from 'react'
import './Sidebar.css'
// import {Container} from "react-router-dom";
function Sidebar({topAnime}) {
    return (
    //    <Container>
           <aside>
           <nav>
               <h3>Top Anime</h3>
               {topAnime.map(anime => ( <a href={anime.url}
               target="_blank"
               key={anime.mal_id}
               rel="noreferrer" >
                  {anime.title}
               </a>) )}
           </nav>
       </aside>
    //    </Container>
    )
}

export default Sidebar
