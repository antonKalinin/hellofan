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

type PropsType = {
    active: number,
    onChange: () => {},
};

export default class Tabs extends Component<void, PropsType, void> {
    constructor(props) {
        super(props);

        this.state = {
            active: undefined,
        };
    }

    handleTabChange = index => {
        this.setState({active: index});

        this.props.onChange(index);
    };

    render() {
        const tabs = [
            {icon: 'ion-ios-football', url: '/matches'},
            {icon: 'ion-ios-flag', url: '/stadiums'},
            {icon: 'ion-ios-pint', url: '/broadcasts'},
        ];

        const {active} = this.state;

        return (
            <div className={styles.root}>
                {tabs.map((tab: {icon: string, url: string}, index: number) =>
                    (<Tab
                        key={`tab_${tab.url.slice(1)}`}
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
