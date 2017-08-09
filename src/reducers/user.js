import actionType from '../actions/types';

export default function user(state, action) {
    if (typeof state === 'undefined') {
        return {
            isHeaderMinimized: false,
            activeTabIndex: 0,
            location: {
                city: '...',
                country: 'GTA',
                position: null,
            },
        };
    }

    switch (action.type) {
    case actionType.SET_LOCATION: {
        const {
            AddressDetails: {
                Country: {
                    CountryName: country,
                    AdministrativeArea: {
                        Locality: {
                            LocalityName: city,
                        },
                    },
                },
            },
        } = action.location;

        return {
            ...state,
            location: {
                city,
                country,
                position: action.position,
            },
        };
    }
    default:
        return state;
    }
}
