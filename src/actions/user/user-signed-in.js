import ApiClient from '../../api/client'
import { loading, loadError } from '../loading'
//import { sleep } from '../../global/Utility'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'


const api = new ApiClient()

export const userSignedIn = () => {
  return dispatch => {
    const path = 'users/me'
    dispatch(loading(path, true))
      api.get('users/me')
      .then(res => dispatch({ type: USER_SIGNED_IN, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path))
  }
}

export default userSignedIn
