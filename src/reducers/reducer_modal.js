import { SIGN_UP_MODAL, LOG_IN_MODAL, CLOSE_MODAL } from '../actions/types'

export default (state = CLOSE_MODAL, action = {}) => {
  switch(action.type) {
    case SIGN_UP_MODAL:
      return action.payload;
    case LOG_IN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return action.payload;
    default:
      return state;
  }
};