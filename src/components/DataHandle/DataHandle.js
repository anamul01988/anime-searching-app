import {useState, useEffect} from 'react';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, setSearch] = useState(['']);

	const GetTopAnime = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
		.then(res => res.json())

		SetTopAnime(temp.top.slice(0,10));

	}
    
	const HandleSearch = e =>{
		e.preventDefault(); 
		FetchAnime(search);
	}
	const FetchAnime = async (query) =>{
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
		.then(res =>res.json());
		console.log(temp.results);
		SetAnimeList(temp.results);
	}

	useEffect(()=>{
		GetTopAnime();
		console.log(topAnime)
	},[]);

	return (
		<div className="container">
	       {/* <Header></Header> */}
		   <div className="row">
		       <div className="col-lg-12 col-sm-12 mt-5 ">
					<MainContent
						HandleSearch = {HandleSearch}
						// search = {search}
						setSearch = {setSearch}
						animeList = {animeList}
					></MainContent>
               </div>
			   <div className="col-lg-12 col-lg-12 mt-5 ">
			       <Sidebar topAnime={topAnime}/>
               </div>
		   </div>
		</div>
	);
}

export default App;
