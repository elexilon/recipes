import { USER_SIGNED_IN } from '../actions/user/sign-in'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case USER_SIGNED_IN :
      return state.concat(payload)

    default :
      return state
  }
}
