import React from 'react';
import styles from './input.module.css';

const Input = (props) => {
    console.log(props.text);
    return (
        <div className={styles.input_container}>
        <textarea 
            className={styles.input_box} 
            onChange={props.changeFormValue} 
            value={props.text}
        />
        <button className={styles.eraser_btn} onClick={props.onClickEraser}>
            <img src="./images/close.png" alt="closebutton" />
        </button>
    </div>   
    );
};

export default Input;