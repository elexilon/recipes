import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'
export const SIGN_UP = 'SIGN_UP'

const api = new ApiClient()

export default (data) => {
  return dispatch => {
    dispatch(loading(true))
    api.post('users', data)
      .catch(err => dispatch(loadError(err)))
    dispatch(loading(false))
  }
}
