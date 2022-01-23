import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userstate from './context/Userstate';
import Login from './component/login';
import Adduser from './component/Adduser';
import Profile from './component/profile';

const App = () => {
  return (
    <>
      <Userstate>
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/adduser" element={<Adduser/>} />
        <Route path="/profile" element={<Profile/>} />
      
        </Routes>
      </Router>
      </Userstate>
    </>
  )
}

export default App
