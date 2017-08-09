import actionType from '../actions/types';

export default function match(state, action) {
    if (typeof state === 'undefined') {
        return {
            list: [],
        };
    }

    switch (action.type) {
    case actionType.RECEIVE_MATCH_LIST:
        return {...state, list: action.list};
    case actionType.RECEIVE_MATCH:
        return {...state, match: action.match};
    default:
        return state;
    }
}
