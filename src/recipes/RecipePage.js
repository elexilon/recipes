import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import RecipeItem, { recipeShape } from './RecipeItem'

export class RecipePage extends PureComponent {
  static propTypes = {
    ...recipeShape.isRequired
  }

  renderRecipe = (recipe, index) => {
    return
  }

  render() {
    const recipe = this.props
    const hiddenLink = true
    if (!recipe.title) return null

    return(
      <RecipeItem
        key={recipe._id}
        onChange={() => {}}
        hiddenLink={ hiddenLink }
        { ...recipe }
      />
    )
  }
}

const mapStateToProps = ({ recipes }, { match }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === match.params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

export default connect(mapStateToProps)(RecipePage)
