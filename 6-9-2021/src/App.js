import React from 'react';
import './App.css';
import Uncontrolled from './Components/Uncontrolled';


class App extends React.Component{
  constructor(){
    super();
    this.state = { sayings: ""};
  }
  update(e){
    this.setState({ sayings: this.refs.anything.value });
  }
  render()
  {
    return(
      <div>
        Type something <input type="text" ref="anything" onChange={this.update.bind(this)}></input>
        <br />
        <em>{this.state.sayings}</em>
        <Uncontrolled />
      </div>
    )
  }
}

export default App;
