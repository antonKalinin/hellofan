/**
 * @flow
 */

import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';

import Team from '../Team';
import {fetchMatch} from '../../actions/match';
import type {
    DispatchType,
    MatchType,
    StateType,
} from '../../actions/types';


import styles from './Match.css';

type PropsType = {
    dispatch: DispatchType,
    match: MatchType,
    isMobile: boolean,
};

class Match extends Component<void, PropsType, void> {
    componentDidMount() {
        // React Router use name "match" for routing props
        const route = this.props.match;
        const {dispatch} = this.props;

        dispatch(fetchMatch(route.params.id));
    }

    render() {
        const {
            teamA,
            teamB,
            time,
            date,
            arena,
            tournament,
        } = this.props.game || {};

        const {isMobile} = this.props;

        return (
            <div className={`${styles.root}`}>
                <div className={`${styles.date}`}>{date}</div>
                <div className={`${styles.teams}`}>
                    <Team {...teamA} left short={isMobile} />
                    <div className={`${styles.time}`}>{time}</div>
                    <Team {...teamB} right short={isMobile} />
                </div>
                <div className={`${styles.arena}`}>{arena}</div>
                <div className={`${styles.tournament}`}>{tournament}</div>

                <div className={`${styles.actions}`}>
                    <Button color='linkedin' size='medium' style={{marginRight: '1rem'}}>
                        Buy tickets
                    </Button>
                    <Button color='linkedin' size='medium'>
                        Find broadcasts
                    </Button>
                </div>
            </div>
        );
    }
}

export default connect((state: StateType): any => ({
    isMobile: state.ui.isMobile,
    game: state.match.match,
}))(Match);
