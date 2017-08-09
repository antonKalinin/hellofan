import React, {Component} from 'react';
import {connect} from 'react-redux';

import Team from '../Team';
import {fetchMatch} from '../../actions/match';

import styles from './Match.css';

class Match extends Component {
    componentDidMount() {
        // React Router use name "match" for routing props
        const route = this.props.match;
        const {dispatch} = this.props;

        dispatch(fetchMatch(route.params.id));
    }

    defaultProps: {
        match: {},
    }

    props: {
        match: {},
        isMobile: boolean,
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
            </div>
        );
    }
}

export default connect(state => ({
    isMobile: state.ui.isMobile,
    game: state.match.match,
}))(Match);
