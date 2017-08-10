/**
 * @flow
 */

import type {UiStateType, ActionType} from '../actions/types';
import {isMobile} from '../modules/utils';


export default function ui(state: UiStateType, action: ActionType) {
    if (typeof state === 'undefined') {
        return {
            isMobile: isMobile(),
            isHeaderMinimized: false,
            activeTabIndex: 0,
        };
    }

    switch (action.type) {
    case 'MINIMIZE_HEADER':
        return {...state, isHeaderMinimized: true};
    case 'MAXIMIZE_HEADER':
        return {...state, isHeaderMinimized: 'false'};
    case 'CHANGE_TAB':
        return {...state, activeTabIndex: action.activeTabIndex};
    default:
        return state;
    }
}
