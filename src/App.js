import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" react component={Name} />
      </Switch>
    </Router>
  )
}

export default App