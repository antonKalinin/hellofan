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

import type {DispatchType} from './actions/types';
import styles from './styles.css';

declare var ymaps: any;

type PropsType = {
    dispatch: DispatchType,
};

class App extends Component<void, PropsType, void> {
    componentDidMount() {
        const {dispatch} = this.props;

        async function fetchLocations() {
            const geo = await ymaps.geolocation.get({provider: 'yandex'});

            try {
                const {position} = geo.geoObjects;
                const location = geo.geoObjects
                    .get(0).properties
                    .get(0).metaDataProperty.GeocoderMetaData;

                dispatch(setLocation(location, position));
            } catch (Error) {
                console.error(Error);
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
                        <Route exact path='/(|match|matches)' component={Matches} />
                        <Route path={'/match/:id'} component={Match} />

                        <Route path='/stadiums' component={Stadiums} />
                        <Route path='/broadcasts' component={Broadcasts} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default withRouter(connect()(App));
