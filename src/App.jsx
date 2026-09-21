import React from 'react'
import Cards from './components/Cards.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
const user="satyam"
  return (
    <div>
      <Navbar/>
      <h1>hlo everyone , i am {user} </h1>
      <Cards/>
      <Footer/>
    </div>
    
  )
}

export default App