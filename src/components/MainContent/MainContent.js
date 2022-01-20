import React, { Children } from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import Details from '../Details/Details';
import './MainContent.css';
function MainContent({setSearch,HandleSearch,search,animeList,topAnime}) {
    return (
        <main>
            <div className="main-head">
            <input type="search" placeholder="Search for an anime by followintg title: "

                    required
                    value = {search}
                    // onChange = {e =>setSearch(e.target.value)}
                    onChange = {e =>setSearch(e.target.value)}
                    >

            </input>
              
             {/* <form className="search-box" //by click search result
                onSubmit={HandleSearch}>
                    <input type="search" placeholder="Search for an anime: "
                onSubmit={HandleSearch}
                >
                    <input type="search" placeholder="Search for an anime by followintg title: "
                    required
                    value = {search}
                    onChange = {e =>setSearch(e.target.value)}
                    ></input>


                </form> */}
            </div>
            <div className="anime-list">

        {

                    topAnime.filter((val)=> {
                        if(search == ""){
                            return val
                        } else if (val.title.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                    }).map(anime =>(
                        <AnimeCard id={anime.mal_id} anime={anime} key = {anime.mal_id}/>
                    ))
                }

            </div>
    
            {/* <MainContent.Provider value={topAnime} >
               {Children}
            </MainContent.Provider> */}
        </main>
    )
}

export default MainContent
