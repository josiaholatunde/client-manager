import axios from 'axios';
import { GET_CLIENTS, ADD_CLIENT } from './types';
import { config } from '../config';

const baseUrl = `${config.baseUrl}/clients`;

export const getClients = () => async dispatch => {
    const res = await axios.get(baseUrl);
    dispatch({type: GET_CLIENTS, payload: res.data});
}

export const addClient = client => async dispatch => {
    console.log('bbb', client);
    const res = await axios.post(baseUrl, client);
    dispatch({type: ADD_CLIENT, payload: res.data});
}