import actionType from '../actions/types';

export default function ui(state, action) {
    if (typeof state === 'undefined') {
        return {
            list: [],
        };
    }

    switch (action.type) {
    case actionType.RECEIVE_BROADCAST_LIST:
        return {...state, list: action.list};
    default:
        return state;
    }
}
