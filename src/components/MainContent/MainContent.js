import React from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import './MainContent.css';
import { NavLink } from "react-router-dom";


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
                //     <NavLink
                //     exact
                //     activeClassName={classes.activeLink}
                //     className={classes.link}
                //     to="/Selected"
                //   >
                //      Selected
                //   </NavLink>

                    props.animeList.map(anime =>(
                        <AnimeCard anime={anime} key = {anime.mal_id}/>
                    ))
                }

            </div>
        </main>
    )
}

export default MainContent
