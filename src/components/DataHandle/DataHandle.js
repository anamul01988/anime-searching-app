import {useState, useEffect} from 'react';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';
// import {useParams} from 'react-router-dom'

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]); //aitai hocce pasts state
	const [search, setSearch] = useState(['']);
	const [loading, setLoading] =useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [topAnimePerPage, setTopAnimePerPage] = useState(10);

	
    console.log(animeList)
	const HandleSearch = e =>{
		e.preventDefault(); 
		FetchAnime(search);
	}
	const FetchAnime = async (query) =>{
		// const {query} = useParams()
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
		.then(res =>res.json());
		// console.log(temp.results);
		SetAnimeList(temp.results);
	}

	useEffect(()=>{ //aikhaner array ta hocce 1st parameter jeita call back function aita e ki kaj korbe identify kore jemon functin er vitor data load hoilo
		const GetTopAnime = async () => {
			const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
			.then(res => res.json())
			 SetTopAnime(temp.top.slice());
			 setLoading(false);
			// SetTopAnime(temp.top.slice(0,10));
	
		}
		GetTopAnime();
		// console.log(topAnime)
	},[]); //specific kono fun chanlge korte caile 2nd parameter ba [] tar moddhe rakhtam . jehetu aktai tai auto data load hobe

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
