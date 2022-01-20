import React from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import './MainContent.css';


function MainContent({setSearch,HandleSearch,search,animeList}) {
    return (
        <main>
            <div className="main-head">
            {/* <input type="search" placeholder="Search for an anime by followintg title: "
                    required
                    value = {search}
                    onChange = {e =>setSearch(e.target.value)}
                    ></input> */}
                <form className="search-box"
                onSubmit={HandleSearch}
                >
                    <input type="search" placeholder="Search for an anime by followintg title: "
                    required
                    value = {search}
                    onChange = {e =>setSearch(e.target.value)}
                    ></input>

                </form>


            </div>
            <div className="anime-list">
                {/* {

                    animeList.map(anime =>(
                        <AnimeCard anime={anime} key = {anime.mal_id}/>
                    ))
                } */}

                  {

                    animeList.filter((val)=> {
                        if(search == ""){
                            return val
                        } else if (val.title.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                    }).map(anime =>(
                        <AnimeCard anime={anime} key = {anime.mal_id}/>
                    ))
                }

            </div>
        </main>
    )
}

export default MainContent
