export const LOADING_ERROR = 'LOADING_ERROR'

export default (error = '') => {
  return {
    type: LOADING_ERROR,
    payload: error
  }
}
