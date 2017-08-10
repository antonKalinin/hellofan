/**
 * @flow
 */

import type {
    ActionType,
    StateType,
    BroadcastStateType,
} from '../actions/types';

export default function broadcast(state: StateType, action: ActionType): BroadcastStateType {
    if (typeof state === 'undefined') {
        return {
            list: [],
        };
    }

    switch (action.type) {
    case 'RECEIVE_BROADCAST_LIST':
        return {...state, list: action.list};
    default:
        return state;
    }
}
