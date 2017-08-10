/* @flow */

import type {ActionType} from './types';

export function minimizeHeader(): ActionType {
    return {
        type: 'MINIMIZE_HEADER',
    };
}

export function maximizeHeader(): ActionType {
    return {
        type: 'MAXIMIZE_HEADER',
    };
}

export function chaneNavigationTab(index: number): ActionType {
    return {
        type: 'CHANGE_TAB',
        activeTabIndex: index,
    };
}
