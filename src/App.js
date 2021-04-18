import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    },6000);
  }
  //state에 Default로 먼저 선언하지 않아도 됨 , setState안에서 새로운 state정의해도 무관함.

  render(){
    const {isLoading} = this.state
    return <div>{isLoading ? "Loading" : "We are ready"}   
    </div>


  }
}

export default App;

