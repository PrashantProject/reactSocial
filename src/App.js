import React from "react";
import Feed from "./components/Feeds";
import SignUp from "../src/components/Singup"
import Login from "./components/Login";
import Home from './Home';
import JobList from "./components/JobList";
import UserList from "./components/network/UserList"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
    <Routes>
      <Route path='/'  element={<Home />} > 
          <Route path='/' index element={<Feed/>} />
          <Route path='/jobs' index element={<JobList/>} />
          <Route path='/network' index element={<UserList/>} />
          
       </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  </Router>
  );
}

export default App;