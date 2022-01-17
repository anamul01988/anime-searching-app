import {useState, useEffect} from 'react';
// import Header from './components/Header';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, setSearch] = useState(['']);

	const GetTopAnime = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
		.then(res => res.json())

		SetTopAnime(temp.top.slice(0,5));

	}
    
	const HandleSearch = e =>{
		e.preventDefault(); //aita form ta k auto refresh kora theke atkabe. sathe form ta k grabe korbe
		console.log(search);
		FetchAnime(search);
	}
	const FetchAnime = async (query) =>{
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
		.then(res =>res.json());
		console.log(temp.results);
		SetAnimeList(temp.results);//aikhaner results ta ki built in function
	}

	useEffect(()=>{
		GetTopAnime();
		console.log(topAnime)
	},[]);
	
	// console.log(topAnime)

	return (
		<div className="App">
	       {/* <Header></Header> */}
		   <div className="content-wrap">   
			   <Sidebar topAnime={topAnime}/>
			   <MainContent
			      HandleSearch = {HandleSearch}
				  search = {search}
				  setSearch = {setSearch}
				  animeList = {animeList}
			   ></MainContent>
		   </div>
		</div>
	);
}

export default App;
