import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {Home} from './pages/Home'

export const App = () => {
  return (
    <div className="App">
      <div className="home">
          <Navbar/>
          <Home/>
          <Footer/>
      </div>
    </div>
  )
}
