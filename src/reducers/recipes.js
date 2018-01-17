import { CREATE_RECIPE } from '../actions/recipes/create'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case CREATE_RECIPE :
      return [...state, payload]

    case FETCHED_RECIPES :
      return state.concat(payload)

    default :
      return state
  }
}
