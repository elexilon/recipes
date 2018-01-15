export const LOADING = 'LOADING'

export default (loading = false) => {
  return {
    type: LOADING,
    payload: loading
  }
}
