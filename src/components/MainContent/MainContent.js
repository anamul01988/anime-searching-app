import React from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import './MainContent.css';
import { NavLink } from "react-router-dom";


function MainContent({setSearch,HandleSearch,search,animeList}) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box"
                onSubmit={HandleSearch}>
                    <input type="search" placeholder="Search for an anime: "
                    required
                    value = {search}
                    onChange = {e =>setSearch(e.target.value)}
                    ></input>


                </form>


                {/* <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div> */}


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

                    animeList.map(anime =>(
                        <AnimeCard anime={anime} key = {anime.mal_id}/>
                    ))
                }

            </div>
        </main>
    )
}

export default MainContent
