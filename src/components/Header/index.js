/* global document */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tabs from '../Tabs';
import {chaneNavigationTab} from '../../actions/ui';
import styles from './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.scrollDelta = props.isMobile ? 2 : 10;
        this.state = {
            prevScrollTop: 0,
            spacerHeight: 6.7,
            isMinimized: false,
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler);
    }

    props: {
        activeTabIndex: number,
        dispatch: () => {},
        isMobile: boolean,
    };

    scrollHandler = () => {
        const {prevScrollTop} = this.state;
        const scrollTop = document.body.scrollTop;
        const scrollingDelta = scrollTop - prevScrollTop;

        if (scrollTop !== 0 && Math.abs(scrollingDelta) > this.scrollDelta) {
            this.setState({isMinimized: scrollingDelta > 0});
        }

        this.setState({prevScrollTop: document.body.scrollTop});
    }

    render() {
        const {spacerHeight, isMinimized} = this.state;
        const {activeTabIndex, location} = this.props;
        const innerClassName = `${styles.inner} ${isMinimized ? styles.inner_minimized : ''}`;

        return (
            <header className={styles.root}>
                <div style={{height: `${spacerHeight}rem`}} />
                <div className={innerClassName} ref={elem => { this.elem = elem; }}>
                    <div className={styles.container}>
                        <h2>{location.city}</h2>
                        <Tabs active={activeTabIndex} onChange={() => this.setState({isMinimized: false})} />
                    </div>
                </div>
            </header>
        );
    }
}

export default connect(state => ({
    isMobile: state.ui.isMobile,
    location: state.user.location,
    activeTabIndex: state.ui.activeTabIndex,
}))(Header);
