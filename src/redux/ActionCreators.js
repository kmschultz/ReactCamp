import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

// Becasuse Redux Thunk is enabled, we can nest a function inside
// another function as below:
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());
    
    // simulating a request to a server with a 2-sec delay
    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

// Thunk not necessary for this one
export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});