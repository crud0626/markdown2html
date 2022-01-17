import React from 'react';
import styles from './input.module.css';

const Input = (props) => {
    const preventEvent = (event) => {
        event.preventDefault();
    }

    return (
        <div className={styles.input_container}>
        <textarea 
            id="inputbox"
            className={styles.input_box} 
            onChange={props.changeFormValue} 
            onDragEnter={preventEvent}
            onDragOver={preventEvent}
            onDrop={props.dragFile}
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