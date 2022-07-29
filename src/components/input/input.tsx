import React, { useRef, useEffect } from 'react';
import { eraserIcon } from '../../constants/iconPath';
import styles from '../../styles/input.module.scss';
import Icon from '../Icon/Icon';

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
            <Icon define={eraserIcon} />
        </button>
    </div>   
    );
};

export default Input;