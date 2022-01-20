import axios from 'axios';
import {useState, useEffect} from 'react';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';
import Pagination from '../Pagination/Pagination';
// import {useParams} from 'react-router-dom'
import './DataHandle.css';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]); //aitai hocce pasts state
	const [search, setSearch] = useState(['']);
	const [loading, setLoading] =useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	// const [topAnimePerPage, setTopAnimePerPage] = useState(10);
	const [postsPerPage] = useState(15);

	
    console.log(animeList)
	const HandleSearch = e =>{
		e.preventDefault(); 
		
		FetchAnime(search);
	}
	// useEffect(()=>{
	// 	FetchAnime(search);
	// },[search])

	const FetchAnime = async (query) =>{
		// const {query} = useParams()
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
		.then(res =>res.json());
		SetAnimeList(temp.results);
	}
	

	useEffect(()=>{ 
		const GetTopAnime = async () => {
			setLoading(true);
			const temp = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity');
			//  SetTopAnime(temp.top.slice());
			 SetTopAnime(temp.data.top.slice());
			 setLoading(false);
	
		}
		GetTopAnime();
	},[]); 
 console.log(topAnime)
 console.log(search)
 
 //Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = topAnime.slice(indexOfFirstPost, indexOfLastPost);

 //change page
 const paginate = pageNumber => setCurrentPage(pageNumber); //ai pageNumber jabe pagination.js a jekhane oikhane number namer argument pass hoice
	return (
		<div className="container">
	       {/* <Header></Header> */}
		   <div className="row">
		       <div className="col-lg-12 col-md-6 col-sm-12 mt-5 ">
					<MainContent
						HandleSearch = {HandleSearch}
						search = {search}
						setSearch = {setSearch}
						animeList = {animeList}
						topAnime = {topAnime}
					></MainContent>

               </div>
			   <div className=" col-md-12 mt-5 ">
				   <div className="row justify-content-center">
					   <div className="col-lg-12 col-md-12 col-sm-12">
					   <Sidebar topAnime={currentPosts} loading={loading}/>
					   </div>
					   <div className="col-md-12 col-sm-12 mb-5  ">
						    <Pagination postsPerPage={postsPerPage} totalPosts={topAnime.length} paginate={paginate}></Pagination>
						</div>
				   </div>
			
               </div>
		   </div>
		</div>
	);
}

export default App;
