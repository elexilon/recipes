import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import RecipesContainer from './recipes/RecipesContainer'
import RecipePage from './recipes/RecipePage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
      </div>
    )
  }
}
