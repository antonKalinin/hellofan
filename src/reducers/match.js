/**
 * @flow
 */

import type {
    ActionType,
    MatchStateType,
    StateType,
} from '../actions/types';

export default function match(state: StateType, action: ActionType): MatchStateType {
    if (typeof state === 'undefined') {
        return {
            list: [],
        };
    }

    switch (action.type) {
    case 'RECEIVE_MATCH_LIST':
        return {...state, list: action.list};
    case 'RECEIVE_MATCH':
        return {...state, match: action.match};
    default:
        return state;
    }
}
