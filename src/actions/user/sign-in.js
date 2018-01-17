import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new ApiClient()

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default (data) => {
  return dispatch => {
    const path = 'sessions'
    dispatch(loading(path, true))

    api.post(path, data)
      .then(res => api.storeToken(res.body.token))
      //.then(res => res.body !== undefined ? api.storeToken(res.body.token) : '')
      .catch(err => dispatch(loadError(err, true),
        sleep(5000)
        .then(_ => dispatch(loadError(err, false)))
        ))


    dispatch(loading(path))
  }
}


// .then(
//   api.get('users/me')
//   .then(res => dispatch({ type: USER_SIGNED_IN, payload: res.body }))
// )
