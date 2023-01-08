import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NabBar/NavBar';
import RawPost from './Components/RowPost/RawPost';
import {comedy,action,orginals,adveture,animation} from './Urls';



//Api key for movie data -netflix  : 19b0003cc4e152d06103097590812d2a
//example: https://api.themoviedb.org/3/movie/550?api_key=19b0003cc4e152d06103097590812d2a
//API Read Access Token (v4 auth) : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWIwMDAzY2M0ZTE1MmQwNjEwMzA5NzU5MDgxMmQyYSIsInN1YiI6IjYzYjQ2NjI3MzhlNTEwMDA3ZDZhMTI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NpbnHWiarkabLV7GZfgmgCjClgVlx5plxtk-wY_FGPM


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RawPost catagory="Netflix Orginals" url={orginals}/>
     <RawPost catagory="Action" posterSamall url={action}/>
     <RawPost catagory="Romance" posterSamall url={comedy}/>
     <RawPost catagory="Adventure" posterSamall url={adveture}/>
     <RawPost catagory="Animation" posterSamall url={animation}/>



    </div>
  );
}

export default App;
