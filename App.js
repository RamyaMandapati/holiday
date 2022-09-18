import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Counter/>}/>

       


      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
