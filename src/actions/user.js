/* @flow */

import type {ActionType} from './types';

export function setLocation(location: any, position: Array<number>): ActionType {
    return {
        type: 'SET_LOCATION',
        location,
        position,
    };
}
