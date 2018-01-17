import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    const path = 'recipes'
    dispatch(loading(path, true))
    api.get(path)
      .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
      .catch(err => dispatch(loadError(err)))
    dispatch(loading(path))
  }
}
