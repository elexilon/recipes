export const LOAD_ERROR = 'LOAD_ERROR'
export const CLEAN_ERROR = 'CLEAN_ERROR'

export default (error = '', load) => {
  return {
    type: load ? LOAD_ERROR : CLEAN_ERROR,
    payload: error
  }
}
