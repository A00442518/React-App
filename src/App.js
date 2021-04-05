import './App.css';
import Province from './components/component1';
import About_me from './components/component2';
import React, { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    page:'h'
  }
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className='menu'>
            <a className="App-link" href="#" onClick={()=>{this.setState({page:'h'})}}>About me</a>&emsp;
            <a className="App-link" href="#" onClick={()=>{this.setState({page:'c'})}}>My Town</a>
          </div>
          {this.state.page==='h' ? <About_me /> : <Province />}
        </header>
      </div>
    );
  }
}

export default App;
