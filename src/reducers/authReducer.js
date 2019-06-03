import { GET_CLIENTS, ADD_CLIENT } from "../actions/types";

const initialState = {
    clients: []
}

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        case ADD_CLIENT: 
            return {
                ...state,
                clients: [action.payload, ...state.clients]
            }
        default:
            return state;
    }
}