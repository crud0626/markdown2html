import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from './buttons.module.css';

const Buttons = (props) => {
    const [toggle, setToggle] = useState(false);

    const onBtnToggle = () => {
        setToggle(toggle => !toggle);
    }

    return(
        <div className={styles.buttons_conatainer}>
            <label htmlFor='upload' className={styles.button}>
                <form action="#">
                    <input type="file" id='upload' accept='.txt,.md' onChange={props.uploadTextFile}/>
                </form>
                <span>Add File</span>
                <img src="./images/plus.png" alt="add button" />
            </label>
            <div id='dropdownBtn' className={`${styles.button} ${toggle ? "open": ""}`} onClick={onBtnToggle}>
                <div className={styles.button_bar}>
                    <span>Download</span>
                    <div className="arrow"></div>
                </div>
                <div id='inner_btns_container' className={styles.inner_btns_container}>
                    <button className="inner_btn" onClick={props.downloadFile}>
                        MARKDOWN
                    </button>
                    <button className="inner_btn" data-title="html" onClick={props.downloadFile}>
                        HTML
                    </button>
                </div>
            </div>
            <button className={styles.button} onClick={props.copyText}>
                <span id='copyTooltip'>Copy</span>
                <img src="./images/copy.png" alt="copy button" />
            </button>
        </div>
    );
};

export default Buttons;