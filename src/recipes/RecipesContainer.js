// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem, { recipeShape } from './RecipeItem'
import './RecipesContainer.css'
import RecipeEditor from './RecipeEditor'
import fetchRecipes from '../actions/recipes/fetch'
import { Link } from 'react-router-dom'
import { userSignedIn } from '../actions/user/user-signed-in'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired
  }

  componentWillMount() {
    this.props.fetchRecipes()
    this.props.userSignedIn()
  }

  renderRecipe = (recipe, index) => {
    return <RecipeItem
      key={index}
      onChange={() => {}}
      showbutton={ false }
      { ...recipe }
    />
  }

  render() {
  return(
   <div className="recipes wrapper">
     <header>
       <Title content="Recipes" />
       <Link to="/sign-in" >Sign In</Link>
       <Link to="/sign-up" >Sign Up</Link>
       <RecipeEditor />
     </header>

     <main>
       { this.props.recipes.map(this.renderRecipe.bind(this)) }
     </main>
   </div>
  )
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes
})

export default connect(mapStateToProps, { fetchRecipes, userSignedIn })(RecipesContainer)
