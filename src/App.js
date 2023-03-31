import './App.css';
import { Route, Router, Routes} from 'react-router-dom';
import Starwar from './Pages/starwar/Starwar';
import Login from './Pages/Login/login';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Starwar' element={<Starwar/>} />
      </Routes>
    </div>
  );
}

export default App;
