import React, { useContext,useState,useEffect } from 'react'
import axios from 'axios';

import {withRouter} from 'react-router-dom'
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
    console.log(id)
    return (
        <div className="container">
            <h1>Its me Anamul haque shanto</h1>
           <div>
               <img src={data?.image_url}/>
               {
                   data?.title
               }
                 
           </div>

        </div>
    )
}

export default withRouter(Details)
