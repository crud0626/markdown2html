import React from 'react';
import styles from './header.module.css';

const Header = ({changeSheet, onChangeDark}) => (
        <header>
            <div className={styles.container}>
                <div className={styles.left}>
                    <button className={styles.cheatsheet_btn} onClick={changeSheet}>
                        CHEAT SHEET
                    </button>
                </div>
                <div className={styles.center}>
                    <img src="./images/mainlogo.png" alt="mainlogo" />
                    <h1>MD TO HTML</h1>
                </div>
                <div className={styles.right}>
                    <label className={styles.darkmode_btn}>
                        <input type="checkbox" onClick={onChangeDark}/>
                        <span className={styles.onoff_switch}></span> 
                    </label>
                </div>
            </div>
        </header>
    );

export default Header;