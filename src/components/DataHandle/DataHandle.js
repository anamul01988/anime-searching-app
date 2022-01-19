import axios from 'axios';
import {useState, useEffect} from 'react';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';
import Pagination from '../Pagination/Pagination';
// import {useParams} from 'react-router-dom'

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]); //aitai hocce pasts state
	const [search, setSearch] = useState(['']);
	const [loading, setLoading] =useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	// const [topAnimePerPage, setTopAnimePerPage] = useState(10);
	const [postsPerPage, setPostsPerPage] = useState(15);

	
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
			setLoading(true);
			const temp = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity');
			//  SetTopAnime(temp.top.slice());
			 SetTopAnime(temp.data.top.slice());
			 setLoading(false);
			// SetTopAnime(temp.data.top.slice(0,10)); aita te data dewa how ni tai ashe nai axios a must lagbe
	
		}
		GetTopAnime();
		// console.log(topAnime)
	},[]); //specific kono fun chanlge korte caile 2nd parameter ba [] tar moddhe rakhtam . jehetu aktai tai auto data load hobe
 console.log(topAnime)

 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = topAnime.slice(indexOfFirstPost, indexOfLastPost);
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
			       <Sidebar topAnime={currentPosts} loading={loading}/>
				   <Pagination postsPerPage={postsPerPage} totalPosts={topAnime.length}></Pagination>
               </div>
		   </div>
		</div>
	);
}

export default App;
