import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStudent/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/view' element={<View/>}/>

    </Routes></BrowserRouter>
  );
}

export default App;
