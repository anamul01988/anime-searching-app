import React from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import './MainContent.css';


function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box"
                onSubmit={props.HandleSearch}>
                    <input type="search" placeholder="Search for an anime: "
                    required
                    value = {props.search}
                    onChange = {e => props.setSearch(e.target.value)}
                    ></input>

                </form>
            </div>
            <div className="anime-list">
                {
                    props.animeList.map(anime =>(
                        // <div className = "anime-card">
                        // {
                        //     anime.title
                        // }
                        // </div>
                        <AnimeCard anime={anime} key = {anime.mal_id}/>
                    ))
                }

            </div>
        </main>
    )
}

export default MainContent
