import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
import User2 from './components/User2';

function App() {
  return (
    <div className="container">
            
      <Navbar title="UserApp" />
      <hr/>
      <User
      name="ali"
      department="software"
      salary="5000"
      />
      <User
      name="John"
      department="teacher"
      salary="6000"
      />
       <User2
      name="argun"
      department="engineer"
      
      />
      <User2
      name="argun"
      
      salary= "5000"
      />

  
    </div>
  );
}

export default App;
