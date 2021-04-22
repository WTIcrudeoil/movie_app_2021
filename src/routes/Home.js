import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "../components/movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };
  getMovies = async() =>{
    const {data:{data :{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    // axios.get속도 느릴수 있음 우리는  js에게 기다려 달라고 해야함
    console.log(movies);
    this.setState({movies,isLoading:false});
  };
  componentDidMount(){
    this.getMovies();
  }
  

  render(){
    const {isLoading,movies} = this.state
    return <section className="container">
      {isLoading ? ( 
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
         ): (
           <div className="movies">
             {movies.map(movie =>{
      return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
    })}
           </div>
           )}   
    </section>


  }
}

export default Home;

//jsx 에서 class component가 있기떄문에 html attritube class는 className으로 써야함