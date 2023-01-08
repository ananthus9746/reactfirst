import React, {useEffect, useState} from "react";
import "./Banner.css";
import axios from '../../Axios'
import {API_KEY,imgePath} from '../../constance/Constance'

function Banner() {

const [movie,setMovie]=useState()

 useEffect(()=>{
  axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{


    var MovieList=response.data.results 

    var radomMovie = MovieList[Math.floor(Math.random()*MovieList.length)];

    console.log("banner radmom movie id..",radomMovie)

    setMovie (radomMovie)
  })

 },[])

  return (
    <div className="banner-cover">
      
      <div className="banner" style={{backgroundImage:`url(${movie?imgePath+movie.backdrop_path:""})`}}>

      <div className="banner-gradient">

      <div className="content">
          <h1 className="title">{movie?movie.title:""}</h1>{/*if movie? print movie.tile else: empty string"" /why this becuse when we are using useEffect we rendering this movie before it getting from useEffect movie data..useeffect run initally(after the banner componnet render) rendering ofthisbanner componnet  */}

          <div className="banner_button">
            <button className="buttom">Play</button>
            <button className="buttom">My List</button>
          </div>
          <h1 className="discription">
           {movie?movie.overview:""}
          </h1>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Banner;
