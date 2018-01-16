import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'
export const SIGN_IN = 'SIGN_IN'

const api = new ApiClient()

export default (data) => {
  return dispatch => {
    dispatch(loading(true))
    api.post('sessions', data)
      .then(res => api.storeToken(res.body.token))
      .catch(err => dispatch(loadError(err)))
    dispatch(loading(false))
  }
}
