import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import Users from './components/Users';


class App extends Component {
 

  render() {
    return (
      <div className="container">
     
        <Navbar title="User App" />
        <hr/>
         <Users />{/*userlarımızı dinamik birşekilde state ile props olarak gönderiyoruz   */}
       
    </div>
    )
  }
}

export default App;