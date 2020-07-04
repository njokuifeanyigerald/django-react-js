import axios from  'axios';
import {returnErrors} from './messages';
import {USER_LOADED,USER_LOADING,AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL,REGISTER_SUCCESS} from './types';


// check the token and load the user
export const loadUser = ()=>(dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    });

  
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(error.response.data, error.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}



export const login = (username, password)  => dispatch => {
   
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    // if token, add to headers config
    const body = JSON.stringify({username, password});

    axios.post('/api/auth/login',body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const register = ({username,email, password})  => dispatch => {
   
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    // if token, add to headers config
    const body = JSON.stringify({username,password,email });

    axios.post('/api/auth/register',body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }).catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const logout = ()=>(dispatch, getState) => {

    axios.post('/api/auth/logout/', null,tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }).catch(err => {
            dispatch(returnErrors(error.response.data, error.response.status))
        })
}


// setup config with token ---helper func

export const tokenConfig = getState => {
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


    // if token, add to headers config
    if(token){
        config.headers['Authorization']= `Token ${token}`
    }
    return config
}