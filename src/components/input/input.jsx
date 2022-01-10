import React from 'react';
import styles from './input.module.css';

const Input = (props) => (
        <textarea className={styles.input_box} onKeyUp={props.onKeyUp}>
            blahblah
        </textarea>
    );

export default Input;