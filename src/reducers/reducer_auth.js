import { SET_CURRENT_USER, USER_SIGN_UP, USER_LOG_IN, USER_LOG_OUT } from '../actions/types'
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default:
      return state;
  }
};