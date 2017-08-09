import types from './types';

export function setLocation(location, position): {type: string} {
    return {
        type: types.SET_LOCATION,
        location,
        position,
    };
}
