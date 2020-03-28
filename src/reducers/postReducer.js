import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], //post that comes from our action
    item: {}   //single post we add when we get the response back
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}