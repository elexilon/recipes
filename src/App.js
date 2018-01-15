import React, { PureComponent } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'

class App extends PureComponent {

  render() {
    return (
      <div className="app">
        <RecipesContainer />
      </div>
    )
  }
}

export default App
