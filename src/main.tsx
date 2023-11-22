import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './pages/login/login.tsx'
import Home from './pages/home/home.tsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
