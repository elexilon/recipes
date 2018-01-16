import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new ApiClient()

export default (data) => {
  return dispatch => {
    dispatch(loading(true))
    api.post('sessions', data)
      .then(res => api.storeToken(res.body.token))
      .then(
        api.get('users/me')
        .then(res => dispatch({ type: USER_SIGNED_IN, payload: res.body }))
      )
      .catch(err => dispatch(loadError(err)))
    dispatch(loading(false))
  }
}
