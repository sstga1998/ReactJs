import React from 'react';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Home />
        
      </div>
    );
  }
}

export default App;
