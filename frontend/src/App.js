import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Notes from './components/Notes';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components/Navbar';
import { Create } from './components/Create';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
