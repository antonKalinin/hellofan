/* @flow */

import type {ActionType} from './types';

/* MOCK DATA */
const MATCHES = [
    {
        teamA: {name: 'Zenit', shortName: 'ZEN'},
        teamB: {name: 'CSKA', shortName: 'CSM'},
        time: '20:00',
        date: '27/07/2017',
        arena: 'Saint Petersburg Stadium',
        tournament: 'Russian Premier Ligue , 3rd tour',
    },
    {
        teamA: {name: 'Zenit', shortName: 'ZEN'},
        teamB: {name: 'Spartak', shortName: 'SPA'},
        time: '19:00',
        date: '06/08/2017',
        arena: 'Saint Petersburg Stadium',
        tournament: 'Russian Premier Ligue , 4th tour',
    },
    {
        teamA: {name: 'Zenit', shortName: 'ZEN'},
        teamB: {name: 'Napoli', shortName: 'NAP'},
        time: '21:30',
        date: '15/08/2017',
        arena: 'Petrovsky Stadium',
        tournament: 'Third qualifying round , 2nd leg',
    },
    {
        teamA: {name: 'Zenit', shortName: 'ZEN'},
        teamB: {name: 'Liverpool', shortName: 'LIV'},
        time: '19:00',
        date: '16/08/2017',
        arena: 'Saint Petersburg Stadium',
        tournament: 'Third qualifying round , 3nd leg',
    },
    {
        teamA: {name: 'Liverpool', shortName: 'LIV'},
        teamB: {name: 'Milan', shortName: 'ACM'},
        time: '21:00',
        date: '21/08/2017',
        arena: 'Petrovsky Stadium',
        tournament: 'Third qualifying round , 3nd leg',
    },
];

export function fetchMatchList(): ActionType {
    return {
        type: 'RECEIVE_MATCH_LIST',
        list: MATCHES,
    };
}

export function fetchMatch(id: number = 0): ActionType {
    return {
        type: 'RECEIVE_MATCH',
        match: MATCHES[parseInt(id, 10)],
    };
}
