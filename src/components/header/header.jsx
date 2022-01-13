import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
        <header>
            <div className={styles.header_container}>
                <div className={styles.left}>
                    <img src="./images/mainlogo.png" alt="mainlogo" />
                    <h1>MD TO HTML</h1>
                </div>
                <div className={styles.right}>
                    <button className={styles.cheatsheet_btn}>
                        CHEAT SHEET
                    </button>
                </div>
            </div>
        </header>
    );

export default Header;