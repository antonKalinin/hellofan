/**
 * global ymaps
 * 
 * @flow
 */

import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/Header';
import Matches from './components/Matches';
import Match from './components/Match';
import Stadiums from './components/Stadiums';
import Broadcasts from './components/Broadcasts';
import {setLocation} from './actions/user';

import type {StateType, DispatchType} from './actions/types';
import styles from './styles.css';

declare var ymaps: any;

class App extends Component {
    state = {
        index: 1,
    };

    props: {
        dispatch: DispatchType,
        isMobile: boolean,
    };

    componentDidMount() {
        const {dispatch} = this.props;

        async function fetchLocations() {
            const geo = await ymaps.geolocation.get({provider: 'yandex'});

            try {
                const {position} = geo.geoObjects;
                const location = geo.geoObjects.get(0).properties.get(0).metaDataProperty.GeocoderMetaData;

                dispatch(setLocation(location, position));
            } catch (Error) {
                console.log(Error);
            }
        }

        ymaps.ready(fetchLocations);
    }

    render() {
        return (
            <div>
                <Header />
                <main className={styles.container}>
                    <Switch>
                        <Route exact path='/(|matches)' component={Matches} />
                        <Route path={'/match/:id'} component={Match} />

                        <Route path='/stadiums' component={Stadiums} />
                        <Route path='/broadcasts' component={Broadcasts} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default withRouter(connect((state: StateType) => ({
    isMobile: state.ui.isMobile,
}))(App));
