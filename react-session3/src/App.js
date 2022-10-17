import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="App">
     <Navbar title="UserApp" />
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
    </div>
  );
}

export default App;
