import axios from 'axios';
import {GET_LEADS, DELETE_LEAD,ADD_LEAD} from './types';
import {createMessage, returnErrors} from './messages'
import {tokenConfig} from './auth'

// get leads
export const  getLeads =() => (dispatch, getState)  => {

    axios.get('/api/leads/', tokenConfig(getState)).then((res)=>{
        // dispatch(createMessage({welcome: "Welcome To Lead.com"}))
        dispatch({
            type: GET_LEADS,
            payload: res.data
        })
    }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));

}
export const  deleteLead =(id) => (dispatch,getState)  => {

    axios.delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then((res)=>{
        dispatch(createMessage({deleteLead: "lead  deleted "}))
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));

}
export const  addLead =(lead) => (dispatch,getState)  => {

    axios.post('/api/leads/', lead, tokenConfig(getState))
    .then(res=>{
        dispatch(createMessage({addLead: "lead successfully added "}))
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
}
