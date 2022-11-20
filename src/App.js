import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';


export const App = () => {
  return (
    <div className="App">
      <div className="home">
          <Navbar/>
          <Footer/>
      </div>
    </div>
  )
}
