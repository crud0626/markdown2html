import React from 'react';
import styles from './input.module.scss';

const Input = (props) => {
    const preventEvent = (event) => {
        event.preventDefault();
    }

    const changeTab = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            const insertStr = "    ";
            const inputBox = document.querySelector("#inputbox");
            const {selectionStart, selectionEnd} = inputBox;
            
            inputBox.value = `${inputBox.value.substring(0, selectionStart)}${insertStr}${inputBox.value.substring(selectionEnd)}`;
            inputBox.selectionStart = selectionStart + insertStr.length;
            inputBox.selectionEnd = selectionEnd + insertStr.length;
            return;
        }
    }

    const onInput = (event) => {
        props.changeFormValue(event.target.value);
    }

    return (
        <div className={styles.container}>
        <textarea 
            id="inputbox"
            className={styles.box} 
            onKeyDown={changeTab}
            onChange={onInput}
            onDragEnter={preventEvent}
            onDragOver={preventEvent}
            onDrop={props.dragFile}
            value={props.text}
            spellCheck="false"
            aria-label="input box"
        />
        <button id='eraser' className={styles.eraser_btn} onClick={props.onClickEraser} aria-label="erase input button">
            <svg viewBox="0 0 96.000000 96.000000">
                <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)">
                    <path d="M56 884 c-9 -8 -16 -19 -16 -24 0 -9 247 -258 339 -343 22 -21 41
                    -42 41 -47 0 -5 -19 -26 -41 -47 -110 -101 -339 -335 -339 -346 0 -17 20 -37
                    37 -37 11 0 301 285 360 354 13 14 27 26 33 26 5 0 26 -19 47 -41 101 -110
                    335 -339 346 -339 17 0 37 20 37 37 0 15 -347 363 -362 363 -4 0 -8 14 -8 30
                    0 17 4 30 8 30 15 0 362 348 362 363 0 17 -20 37 -37 37 -11 0 -245 -229 -346
                    -339 -21 -22 -42 -41 -47 -41 -6 0 -20 12 -33 26 -48 56 -348 354 -357 354 -5
                    0 -16 -7 -24 -16z"/>
                </g>
            </svg>
        </button>
    </div>   
    );
};

export default Input;