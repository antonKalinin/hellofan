/**
 * global ymaps
 *
 * @flow 
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Team from '../Team';
import DateRange from '../DateRange';

import type {DispatchType, MatchType, StateType} from '../../actions/types';
import {fetchMatchList} from '../../actions/match';

import styles from './Matches.css';

class MatchItem extends Component {
    props: {
        teamA: Object,
        teamB: Object,
        time: string,
        date: string,
        arena: string,
        isMobile: boolean,
        tournament: string,
    }

    render() {
        const {
            teamA,
            teamB,
            time,
            date,
            arena,
            tournament,
            isMobile,
        } = this.props;

        return (
            <div className={`${styles.match}`}>
                <div className={`${styles.date}`}>{date}</div>
                <div className={`${styles.teams}`}>
                    <Team {...teamA} left short={isMobile} />
                    <div className={`${styles.time}`}>{time}</div>
                    <Team {...teamB} right short={isMobile} />
                </div>
                <div className={`${styles.arena}`}>{arena}</div>
                <div className={`${styles.tournament}`}>{tournament}</div>
            </div>
        );
    }
}

class Matches extends Component {
    props: {
        dispatch: DispatchType,
        match: Object, // React Router
        matchList: Array<MatchType>,
        isMobile: boolean,
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchMatchList());
    }

    render() {
        const {isMobile, matchList} = this.props;

        const route = this.props.match;

        return (
            <div className={styles.root}>
                <div className={styles.list}>
                    {matchList.map((match: MatchType, index: number) => (
                        <Link className={styles.item} to={`match/${index}`} key={`match_${index}`}>
                            <MatchItem {...match} isMobile={isMobile} />
                        </Link>
                    ))}
                </div>
                <DateRange />
            </div>
        );
    }
}

export default connect((state: StateType) => ({
    isMobile: state.ui.isMobile,
    matchList: state.match.list,
}))(Matches);
