import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import HomePage from './pages/HomePage/HomePage'
import MyAccountPage from './pages/MyAccountPage/MyAccountPage'
import Pokedex from './pages/PokedexPage/Pokedex'
import UserlistPage from './pages/UserlistPage/UserlistPage'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="" component={HomePage}/>
        <Route path="" component={MyAccountPage} />
        <Route path="" component={Pokedex} />
        <Route path="" component={UserlistPage} />
      </Switch>
    </Router>
  )
}

export default App;
