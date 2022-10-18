import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import Users from './components/Users';


class App extends Component {
  state = {
    users: [
      {
        id:1,
        name : "Mustafa Murat",
        salary : "5000",
        department : "Bilişim"
      },
      {
        id:2,
        name : "Kemalettin Şen",
        salary : "7000",
        department : "Pazarlama"
      },
      {
        id:3,
        name : "Mahmut Pek",
        salary : "4000",
        department : "Üretim"
      }
    ]
  }

  render() {
    return (
      <div className="container">
     
        <Navbar title="UserApp" />
        <hr></hr>
         <Users users={this.state.users}/>{/*userlarımızı dinamik birşekilde state ile props olarak gönderiyoruz   */}
      
    </div>
    )
  }
}

export default App;