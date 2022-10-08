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
   

    </div>
  );
}

export default App;

//state bir component ın o anki durumun gösteren ve değşik propertilerden oluşan   javascript objesidir
//state component ın o anki durumunu belirtir, tıklama işlemi, component ın görünürlüğü vb
//websayfamız üzerinde birden çok component ın oması durumunda yalnızca state i değişen component render oluyor
//state leri direk değiştiremiyoruz **setState** fonksiyonu ile değiştirebiliyoruz
//bir component taki state i props yardımıyla başka bir component a aktarabiliyoruz