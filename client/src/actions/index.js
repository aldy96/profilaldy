import axios from 'axios' //axios is AJAX for access server API
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => { 
    axios.defaults.withCredentials = true;
    const res = await axios.get('http://localhost:5000/current_user', {
        headers: {
        'Content-Type': 'application/json'
         }
        });//waiting server respone
            // console.log(res.data)
            dispatch({type: FETCH_USER, payload: res.data}); //send to reducers
          
        }

