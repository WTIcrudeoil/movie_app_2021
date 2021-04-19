import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./movie";

class App extends React.Component{
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
    return <div>{isLoading ? "Loading" : movies.map(movie =>{
      console.log(movie);
      return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
    })}   
    </div>


  }
}

export default App;

