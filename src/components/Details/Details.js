import React, {useState,useEffect } from 'react'
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom'
function Details(props) {
    const [topAnime, SetTopAnime] = useState([]); 
    const [loading, setLoading] =useState(false);
    const {match:{params:{id}}}= props;
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
    const data=topAnime.filter((item)=>item.mal_id == id)[0];
    // console.log(id)
    return (
        <div className="container">
            <div class="row py-3">
                 <div class="col-lg-12 col-md-12 col-12 ">
                    <div class="details  bg-light py-5 d-flex flex-wrap justify-content-center">
                        <img src={data?.image_url}/>
                        <div class="details-content fs-6 ps-3 py-3">
                    <h1 class="fs-2 text-dark"> {
                        data?.title
                    } </h1>   
                      <h1 class="fs-2 text-success">  {
                        data?.episodes
                    } </h1>  
                      <h1 class="fs-2 text-success"> {
                        data?.start_date
                    } </h1>  
                      <h1 class="fs-2 text-success"> {
                        data?.end_date
                    } </h1>  
                      <h1 class="fs-2 text-success">  {
                        data?.members
                    } </h1>  
                        </div>
              
                 </div>
                 </div>
                 <div class="footer-for-Back py-3">
                     <button><Link to="/" style={{textDecoration:'none', padding:'25px',color:"black"}}>Back</Link></button>
                 </div>
                 
            </div>
            
         
        </div>
    )
}

export default withRouter(Details)
