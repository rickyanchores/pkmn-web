import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import HomePage from './pages/HomePage/HomePage'
import Pokedex from './pages/PokedexPage/Pokedex'
import Poketrainer from './pages/PoketrainerPage/Poketrainer'


const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="" component={HomePage}/>
        <Route path="" component={Pokedex} />
        <Route path="" component={Poketrainer} />
      </Switch>
    </Router>
  )
}

export default App;