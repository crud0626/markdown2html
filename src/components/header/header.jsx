import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
        <header>
            <div className={styles.left}>
                <img src="./images/mainlogo.png" alt="mainlogo" />
                <h1>MD To HTML</h1>
            </div>
            <div className={styles.right}>

            </div>
        </header>
    );

export default Header;