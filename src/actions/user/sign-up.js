import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'
export const SIGN_UP = 'SIGN_UP'

const api = new ApiClient()

export default (data) => {
  return dispatch => {
    const path = 'users'
    dispatch(loading(path, true))
    api.post(path, data)
    .catch(err => dispatch(loadError(err)))
    dispatch(loading(path))
  }
}
