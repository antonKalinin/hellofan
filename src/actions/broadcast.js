/* @flow */

import type {ActionType} from './types';

/* MOCK DATA */
const BROADCASTS = [
    {
        id: '1',
        match: {
            teamA: {name: 'Zenit', shortName: 'ZEN'},
            teamB: {name: 'CSKA', shortName: 'CSK'},
            time: '20:00',
            date: '27/07/2017',
            arena: 'Saint Petersburg Stadium',
            tournament: 'Russian Premier Ligue , 3rd tour',
        },
        location: {
            name: 'Union Bar',
            address: 'Chernishevskogo, 21',
            phone: '+7 911 900 79 80',
        },
    },
    {
        id: '1',
        match: {
            teamA: {name: 'Zenit', shortName: 'ZEN'},
            teamB: {name: 'CSKA', shortName: 'CSK'},
            time: '21:00',
            date: '27/07/2017',
            arena: 'Saint Petersburg Stadium',
            tournament: 'Russian Premier Ligue , 3rd tour',
        },
        location: {
            name: 'Mingle Bar',
            address: 'Chernishevskogo, 21',
            phone: '+7 911 900 79 80',
        },
    },
    {
        id: '1',
        match: {
            teamA: {name: 'Zenit', shortName: 'ZEN'},
            teamB: {name: 'CSKA', shortName: 'CSK'},
            time: '19:30',
            date: '27/07/2017',
            arena: 'Saint Petersburg Stadium',
            tournament: 'Russian Premier Ligue , 3rd tour',
        },
        location: {
            name: 'Bar na Mohovoy',
            address: 'Chernishevskogo, 21',
            phone: '+7 911 900 79 80',
        },
    },
    {
        id: '1',
        match: {
            teamA: {name: 'Zenit', shortName: 'ZEN'},
            teamB: {name: 'CSKA', shortName: 'CSK'},
            time: '22:30',
            date: '27/07/2017',
            arena: 'Saint Petersburg Stadium',
            tournament: 'Russian Premier Ligue , 3rd tour',
        },
        location: {
            name: 'Farch & Bochka',
            address: 'Chernishevskogo, 21',
            phone: '+7 911 900 79 80',
        },
    },
    {
        id: '1',
        match: {
            teamA: {name: 'Zenit', shortName: 'ZEN'},
            teamB: {name: 'CSKA', shortName: 'CSK'},
            time: '19:30',
            date: '27/07/2017',
            arena: 'Saint Petersburg Stadium',
            tournament: 'Russian Premier Ligue , 3rd tour',
        },
        location: {
            name: 'Skotniy Dvor',
            address: 'Chernishevskogo, 21',
            phone: '+7 911 900 79 80',
        },
    },
];

export function fetchBroadcastList(): ActionType {
    return {
        type: 'RECEIVE_BROADCAST_LIST',
        list: BROADCASTS,
    };
}

export function fetchBroadcast(id: number): ActionType {
    return {
        type: 'RECEIVE_BROADCAST',
        broadcast: BROADCASTS[id],
    };
}
