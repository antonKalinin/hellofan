import types from './types';

export function setLocation(): {type: string} {
    return {
        type: types.SET_LOCATION,
    };
}
