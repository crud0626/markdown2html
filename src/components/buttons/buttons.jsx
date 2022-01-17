import React from 'react';
import styles from './buttons.module.css';

const Buttons = (props) => (
        <div className={styles.buttons}>
            <label htmlFor='upload' className={styles.button}>
                <form action="#">
                    <input type="file" id='upload' accept='.txt,.md' onChange={props.uploadTextFile}/>
                </form>
                <img src="./images/plus.png" alt="add button" />
            </label>
            <button className={styles.button} onClick={props.downloadMD} title='MD'>
                <img src="./images/download.png" alt="download button" />
            </button>
            <button className={styles.button} onClick={props.downloadHTML} title='HTML'>
                <img src="./images/download.png" alt="download button" />
            </button>
            <button className={styles.button} onClick={props.copyText}>
                <img src="./images/copy.png" alt="copy button" />
                <span id='copyTooltip' className={`${styles.tooltip} ${styles.tooltip_bottom}`}>Copy Text</span>
            </button>
        </div>
    );

export default Buttons;