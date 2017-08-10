/**
 * global ymaps
 *
 * @flow
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './Stadiums.css';

class Location extends Component {
    constructor(props) {
        super(props);

        this.map = null;
    }

    componentDidMount() {
        const {geoLocation} = this.props;

        if (geoLocation && geoLocation.position) {
            this.renderMap(geoLocation.position);
        }
    }

    componentWillReceiveProps(nextProps) {
        const {geoLocation} = nextProps;

        if (geoLocation && geoLocation.position) {
            this.renderMap(geoLocation.position);
        }
    }

    renderMap(position) {
        ymaps.ready(() => {
            this.map = new ymaps.Map('map', {
                center: position,
                zoom: 10,
            }, {
                searchControlProvider: 'yandex#search',
            });
        });
    }

    render() {
        return (
            <div>
                <div id='map' className={styles.map}></div>
            </div>
        );
    }
}

export default connect(state => ({
    isMobile: state.ui.isMobile,
    geoLocation: state.user.location,
}))(Location);
