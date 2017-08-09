/**
 * global ymaps
 *
 * @flow 
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import type {DispatchType, StateType} from '../../actions/types';
import {fetchBroadcastList} from '../../actions/broadcast';
import styles from './Broadcasts.css';

declare var ymaps: any;

class Broadcast extends Component {
    render(props) {
        const {index, location, match} = this.props;

        return (
            <div className={styles.item}>
                <div className={styles.mapMark}>{index + 1}</div>
                <div className={styles.match}>
                    <div className={styles.team} />
                    <div className={styles.time}>
                        {match.time}
                    </div>
                    <div className={styles.team} />
                </div>

                <div className={styles.locationName}>
                    {location.name}
                </div>
                <div className={styles.locationDistance}>
                    {`${location.distance || String.prototype.slice.call(Math.random() * 10, 0, 3)}km`}
                </div>
            </div>
        );
    }
}

type PropsType = {
    dispatch: DispatchType,
    broadcastList: [],
    geoLocation: {},
};

class Broadcasts extends Component<void, PropsType, void> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {geoLocation, dispatch} = this.props;

        if (geoLocation && geoLocation.position) {
            this.renderMap(geoLocation.position);
        }

        dispatch(fetchBroadcastList());
    }

    componentWillReceiveProps(nextProps) {
        const {geoLocation} = nextProps;

        if (geoLocation && geoLocation.position) {
            this.renderMap(geoLocation.position);
        }
    }

    renderMap(position: [number, number]) {
        ymaps.ready(() => {
            ymaps.Map('map', {
                controls: [],
                center: position,
                zoom: 10,
            }, {
                searchControlProvider: 'yandex#search',
            });
        });
    }

    render() {
        const {broadcastList, geoLocation} = this.props;

        return (
            <div className={styles.root}>
                {geoLocation && geoLocation.position && <div id='map' className={styles.map}></div>}
                <div className={styles.list}>
                    {broadcastList.map((broadcast, index) =>
                        <Broadcast index={index} {...broadcast} key={`broadcast_${index}`} />)}
                </div>
            </div>
        );
    }
}

export default connect((state: StateType) => ({
    geoLocation: state.user.location,
    broadcastList: state.broadcast.list,
}))(Broadcasts);
