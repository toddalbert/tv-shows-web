import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import AddShow from './scenes/AddShow';
import './App.css';

function App() {

  const [shows, setShows] = useState()
  const [user, setUser] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home shows={shows} setShows={setShows} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/addShow" element={<AddShow setShows={setShows} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
