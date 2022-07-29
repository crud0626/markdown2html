import React, { useRef, useEffect } from 'react';
import styles from './input.module.scss';
import Icon from '../icon/icon';

interface IProps {
    inputValue: string | ArrayBuffer;
    checkFileType(targetFile: File): void;
    onChangeValue(value: string): void;
    onErase(): void;
}

const Input = (props: IProps) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const convertTabSpace = (event: React.KeyboardEvent) => {
        if (event.key === "Tab" && inputRef.current) {
            event.preventDefault();
            const insertStr = "    ";
            const inputBox = inputRef.current;
            const {selectionStart, selectionEnd} = inputBox;
            const newValue = `${inputBox.value.substring(0, selectionStart)}${insertStr}${inputBox.value.substring(selectionEnd)}`;

            inputBox.value = newValue;
            inputBox.selectionStart = selectionStart + insertStr.length;
            inputBox.selectionEnd = selectionStart + insertStr.length;
            
            props.onChangeValue(newValue);
        }
    }

    const onInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target) {
            props.onChangeValue(event.target.value);
        }
    };

    const onDropFile = (event: React.DragEvent) => {
        if (event.dataTransfer) {
            event.preventDefault();
            props.checkFileType(event.dataTransfer.files[0]);
        }
    }

    return (
        <div className={styles.container}>
        <textarea 
            id='inputbox'
            ref={inputRef}
            className={styles.box} 
            onKeyDown={convertTabSpace}
            onChange={onInput}
            onDragEnter={e => e.preventDefault()}
            onDragOver={e => e.preventDefault()}
            onDrop={onDropFile}
            value={typeof props.inputValue === "string" ? props.inputValue : ""}
            spellCheck="false"
            aria-label="input box"
        />
        <button id='eraser' className={styles.eraser_btn} onClick={props.onErase} aria-label="erase input button">
            <Icon 
                define={[`M56 884 c-9 -8 -16 -19 -16 -24 0 -9 247 -258 339 -343 22 -21 41 -42 41 -47 0 -5 -19 -26 -41 -47 -110 -101 -339 -335 -339 -346 0 -17 20 -37 37 -37 11 0 301 285 360 354 13 14 27 26 33 26 5 0 26 -19 47 -41 101 -110 335 -339 346 -339 17 0 37 20 37 37 0 15 -347 363 -362 363 -4 0 -8 14 -8 30 0 17 4 30 8 30 15 0 362 348 362 363 0 17 -20 37 -37 37 -11 0 -245 -229 -346 -339 -21 -22 -42 -41 -47 -41 -6 0 -20 12 -33 26 -48 56 -348 354 -357 354 -5 0 -16 -7 -24 -16z`]}
            />
        </button>
    </div>   
    );
};

export default Input;