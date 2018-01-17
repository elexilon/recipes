export const LOADING = 'LOADING'
export const DONE_LOADING = 'DONE_LOADING'

export default ( path = '', loading = false) => {
  return {
    type: loading ? LOADING : DONE_LOADING,
    payload: path
  }
}
