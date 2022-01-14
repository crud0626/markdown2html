import React from 'react';
import styles from './input.module.css';

const Input = (props) => {
    return (
        <div className={styles.input_container}>
        <textarea 
            id="inputbox"
            className={styles.input_box} 
            onChange={props.changeFormValue} 
            value={props.text}
            spellCheck="false"
        />
        <button className={styles.eraser_btn} onClick={props.onClickEraser}>
            <img src="./images/close.png" alt="closebutton" />
        </button>
    </div>   
    );
};

export default Input;