import loginpage from'./components/loginpage';
import registerpage from './components/registerpage'
import {router,route,link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <loginpage/>
      </div>
      <div>
        <registerpage/>
      </div>
    </div>
  );
}

export default App;
