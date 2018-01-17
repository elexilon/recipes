import { LOAD_ERROR, CLEAN_ERROR } from '../actions/loadError'





export const loadError = (state = [], { type, payload } = {}) => {

  switch(type) {
    case LOAD_ERROR :

    if(payload instanceof Error){
      return state.concat(payload.message)
    }
    if(payload instanceof String)
    {
      return state.concat(payload)
    }

    return payload

    case CLEAN_ERROR :
      if(payload instanceof Error){
        return state.filter((message) => message !== payload.message)
      }
      return state.filter((message) => message !== payload)

    default :
      return state
  }
}

export default loadError
