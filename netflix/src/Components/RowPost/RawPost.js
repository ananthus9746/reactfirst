import React, { useEffect, useState } from "react";
import { API_KEY, imgePath } from "../../constance/Constance";
import axios from "../../Axios";
import "./RawPost.css";

import YouTube from "react-youtube";

function RawPost(props) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState('');

  console.log("link..", trailer);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log("rawpost..", response.data);
        setMovie(response.data.results);
      });
  },);



  const movieTrailer=(id)=> {
    console.log("obj id..",id)

    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      if (response.data.results.length !==0) {
        console.log("row api res..", response.data.results[0].key);
        setTrailer(response.data.results[0].key);
      } else {
        console.log("no trailer found");
      }
    });
  }


  return (
    <div className="row">
     <h2>{props.catagory}</h2>
      
      <div className="posters">
        {movie.map((obj) => {

            return(
            <img className={props.posterSamall?"posterSamall":"poster"}  onClick={()=>{movieTrailer(obj.id)}}   src={`${imgePath + obj.backdrop_path}`}   alt="" />
            )
        })}
      </div>
          
{
    trailer &&< YouTube opts={opts} videoId={trailer} /> 

}   
    
    </div>
  );
}

export default RawPost;
