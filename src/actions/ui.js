import types from './types';

export function minimizeHeader(): {type: string} {
    return {
        type: types.MINIMIZE_HEADER,
    };
}

export function maximizeHeader(): {type: string} {
    return {
        type: types.MAXIMIZE_HEADER,
    };
}

export function chaneNavigationTab(index: number): {type: string, activeTabIndex: number} {
    return {
        type: types.CHANGE_TAB,
        activeTabIndex: index,
    };
}
