import ApiClient from '../../api/client'
import { loading, loadError } from '../loading'
//import { sleep } from '../../global/Utility'
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

// sleep(5000)
// .then(_ => dispatch(cleanError(err)))
// ))
