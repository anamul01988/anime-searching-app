import React from 'react'
import './Sidebar.css'
// import {Container} from "react-router-dom";
function Sidebar({topAnime, loading}) {
    if(loading){
        return <h3 className="text-center">Loading...</h3>
    }
    return (
        <div className="">
             <nav>
                    <h3 className="  text-dark ">Top Anime</h3>
                    <div className="home-data">
                    {topAnime.map(anime => (
                   <article className="anime-card-area">
                        <a href={anime.url}
                        target="_blank"
                        key={anime.mal_id}
                        rel="noreferrer" >

                            <figure>
                                <img className="img-fluid"
                                    src={anime.image_url} alt="Anime Image" />
                            </figure>
                            <h3>
                                {anime.title}
                            </h3>
                        </a>
                    </article>
                    ) )}
                    </div>
                </nav>
        </div>

    )
}

export default Sidebar
