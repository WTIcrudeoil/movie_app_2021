import PropTypes from "prop-types";
import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };
  getMovies = async() =>{
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    // axios.get속도 느릴수 있음 우리는  js에게 기다려 달라고 해야함
  };
  componentDidMount(){
    this.getMovies();
  }
  

  render(){
    const {isLoading} = this.state
    return <div>{isLoading ? "Loading" : "We are ready"}   
    </div>


  }
}

export default App;

