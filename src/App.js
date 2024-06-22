import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResetPassword from './Components/ResetPassword';
import NewToken from './Components/token';
import NewPassword from './Components/newpassword';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} /> 
        <Route path="/new-token" element={<NewToken />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
