import {
    POST_COMMENT_ASYNC,
    GET_COMMENT_ASYNC,
} from '../sharedFunctions/types';
const INITIAL_STATE = {
    loading: true,
    comments: [],
    shouldUpdate: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case POST_COMMENT_ASYNC:
            const {selected, comment} = action
            let StateComments = state.comments
            console.log(action,'ac')
            StateComments.push({
                "body" : comment,
                "selected" : selected
            })
            console.log(StateComments, 'as')
            return {
                ...state,
                comments: StateComments,
                shouldUpdate: !state.shouldUpdate
            };

        case GET_COMMENT_ASYNC:
            return {
                ...state,
                comments: action.result
            };
        default:
    }
    return state;
}