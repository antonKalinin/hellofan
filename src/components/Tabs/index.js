import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Ionicon from 'react-ionicons';

import styles from './Tabs.css';

const Tab = props => (
    <NavLink
        to={props.tab.url}
        activeClassName={`${styles.active}`}
        isActive={(match):boolean => props.active !== undefined ? props.active : match}
        className={`${styles.tab}`}
        onClick={() => props.onChange(props.index)}
    >
        <Ionicon icon={props.tab.icon} fontSize='25px' color='#333' />
    </NavLink>
);

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: undefined,
        };
    }

    props: {
        active: number,
        onChange: () => {},
    }

    handleTabChange = index => {
        this.setState({active: index});

        this.props.onChange(index);
    };

    render() {
        const tabs = [
            {icon: 'ion-ios-football', url: '/match'},
            {icon: 'ion-ios-location', url: '/location'},
            {icon: 'ion-ios-pint', url: '/broadcast'},
        ];

        const {active} = this.state;

        return (
            <div className={styles.root}>
                {tabs.map((tab, index) =>
                    (<Tab
                        key={`tab_${index}`}
                        tab={tab}
                        index={index}
                        active={active !== undefined ? active === index : undefined}
                        onChange={this.handleTabChange}
                    />),
                )}
            </div>
        );
    }
}
