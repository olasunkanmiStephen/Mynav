import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" react component={Home} />
      </Switch>
    </Router>
  )
}

export default App