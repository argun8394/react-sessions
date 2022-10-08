import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

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
       <User
      name="argun"
      department="engineer"
      
      />

    </div>
  );
}

export default App;
