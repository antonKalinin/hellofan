/**
 * global ymaps
 *
 * @flow 
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import type {DispatchType, StateType, BroadcastType} from '../../actions/types';
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
                    {`${String.prototype.slice.call(Math.random() * 10, 0, 3)}km`}
                </div>
            </div>
        );
    }
}

type PropsType = {
    dispatch: DispatchType,
    broadcastList: Array<BroadcastType>,
    userLocation: {
        position: Array<number>
    },
};

class Broadcasts extends Component<void, PropsType, void> {
    constructor(props) {
        super(props);

        this.map = null;
    }

    componentDidMount() {
        const {userLocation, dispatch} = this.props;

        if (userLocation && userLocation.position) {
            this.renderMap(userLocation.position);
        }

        dispatch(fetchBroadcastList());
    }

    componentWillReceiveProps(nextProps) {
        const {userLocation} = nextProps;

        if (userLocation && userLocation.position) {
            this.renderMap(userLocation.position);
        }
    }

    renderMap(position: Array<number>) {
        ymaps.ready(() => {
            this.map = new ymaps.Map('map', {
                center: position,
                controls: [],
                zoom: 10,
            }, {
                searchControlProvider: 'yandex#search',
            });
        });
    }

    render() {
        const {broadcastList} = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.list}>
                    {broadcastList.map((broadcast, index) =>
                        <Broadcast index={index} {...broadcast} key={`broadcast_${index}`} />)}
                </div>
                <div id='map' className={styles.map}></div>
            </div>
        );
    }
}

export default connect((state: StateType) => ({
    userLocation: state.user.location,
    broadcastList: state.broadcast.list,
}))(Broadcasts);
