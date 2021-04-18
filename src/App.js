import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  componentDidMount(){
    console.log('component rendered');
  };
  componentDidUpdate(){
    console.log('I ve just updated');
  }

  state = {
    count :0
  };
  add = () =>{
    this.setState(current => ({count : current.count +1}))};
  minus = () => {this.setState({count : this.state.count - 1})};
  render(){
    console.log('I am rendering');
    return <div>
      <h1>The number is :{this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>


  }
}

export default App;

//Component Life cycle

//class react component  는 리턴을 가지고 있지않음. react는 클래스 컴포넌트의 랜더 메쏘드를 실행하려고 한다.
// class component  has state and stats is object
// state를 직접 변경하지 않으며, setState를 사용함. state 의 value 변경후에는 다시 랜더링 해주는 과정도 필요한데 setState()는 렌더링 까지 함께 수행해준다