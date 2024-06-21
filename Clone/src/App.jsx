import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import SigninPage from './pages/registration/SigninPage';

const App = () => {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signin" element={ <SigninPage/>} />
       </Routes>
      </Router>
    </div>
  )
}

export default App