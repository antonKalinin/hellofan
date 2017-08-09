import React from 'react';
import styles from './Team.css';

const Team = (props) => {
    const backgroundImage = `url('/dist/images/teams/${props.shortName}_140.png')`;

    return (
        <div
            className={`${styles.root} ${props.left ? styles.left : ''} ${props.right ? styles.right : ''}`}
        >
            {
                props.right && <div className={styles.logo} style={{backgroundImage}} />
            }
            <div className={styles.name}>{props.short ? props.shortName : props.name}</div>
            {
                props.left && <div className={styles.logo} style={{backgroundImage}} />
            }
        </div>
    );
};

export default Team;
