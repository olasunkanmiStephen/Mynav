import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App