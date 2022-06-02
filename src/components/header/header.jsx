import React from 'react';
import styles from './header.module.scss';

const Header = ({handleSheet, handleDarkMode}) => (
        <header>
            <div className={styles.container}>
                <div className={styles.left}>
                    <button className={styles.cheatsheet_btn} onClick={handleSheet} aria-label="cheatsheet page button">
                        CHEAT SHEET
                    </button>
                </div>
                <a href='https://www.mdtohtml.com' className={styles.center}>
                    <img src="./images/mainlogo.png" alt="mainlogo" />
                    <h1>MD TO HTML</h1>
                </a>
                <div className={styles.right}>
                    <label className={styles.darkmode_btn}>
                        <input type="checkbox" onClick={handleDarkMode} aria-label="darkmode button"/>
                        <span className={styles.onoff_switch}></span> 
                    </label>
                </div>
            </div>
        </header>
    );

export default Header;