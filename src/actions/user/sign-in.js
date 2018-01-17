import ApiClient from '../../api/client'
import { loading, loadError } from '../loading'
//import { sleep } from '../../global/Utility'




const api = new ApiClient()

export default (data) => {
  return dispatch => {
    const path = 'sessions'
    dispatch(loading(path, true))

    api.post(path, data)
      .then(res => api.storeToken(res.body.token))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path))
  }
}
