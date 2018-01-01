import axios from 'axios';
import setAuthToken from '../../setAuthToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, USER_LOG_IN, USER_LOG_IN_FAILED, USER_SIGN_UP, USER_SIGN_UP_FAILED, USER_LOG_OUT } from './types';


export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user: user
  }
}

export const login = (user) => {
	return function(dispatch){
    axios.post("/users/login", user)
      .then(function(response) {
        // response.data should be able to return the token we get from the api and we store the token
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
        dispatch({type: USER_LOG_IN, payload: response.data})
      })
      .catch(function(err){
        dispatch({type: USER_LOG_IN_FAILED, payload: err})
      })
  }
};

export const signup = (user) => {
	return function(dispatch){
    axios.post("/users/signup", user)
      .then(function(response) {
        // response.data should be able to return the token we get from the api and we store the token
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
        dispatch({type: USER_SIGN_UP, payload: response.data})
      })
      .catch(function(err){
        dispatch({type: USER_SIGN_UP_FAILED, payload: err})
      })
  }
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  }
}