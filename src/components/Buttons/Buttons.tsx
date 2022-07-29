import React from 'react';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import styles from '../../styles/buttons.module.scss';
import { addIcon, copyIcon } from '../../constants/iconPath';

interface IProps {
    copyValue(): void;
    downloadFile({ target }: React.MouseEvent): void;
    checkFileType(targetFile: File): void;
}

const Buttons = React.forwardRef<HTMLSpanElement, IProps>((props, ref) => {
    const [toggle, setToggle] = useState<boolean>(false);

    const onBtnToggle = () => setToggle(toggle => !toggle);

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.files) props.checkFileType(event.target.files[0]);
        return;
    }

    return(
        <div className={`${styles.container} buttons_container`}>
            <label htmlFor='upload' className={`${styles.button} button`} aria-label="add file button">
                <form action="#">
                    <input type="file" id='upload' accept='.txt,.md' onChange={onChangeFile}/>
                </form>
                <span>Add File</span>
                    <Icon define={addIcon} />
            </label>
            <div id='dropdown_container' className={`${styles.button} ${styles.dropdown_container} ${toggle ? "open": ""} button`} onClick={onBtnToggle}>
                <div className={styles.dropdown_btn}>
                    <span>Download</span>
                    <div className="arrow"></div>
                </div>
                <div id='inner_btns_container' className={styles.inner_container}>
                    <button className="inner_btn" data-role="markdown" onClick={props.downloadFile} aria-label="markdown download button">
                        MARKDOWN
                    </button>
                    <button className="inner_btn" data-role="html" onClick={props.downloadFile} aria-label="html download button">
                        HTML
                    </button>
                </div>
            </div>
            <button className={`${styles.button} button`} onClick={props.copyValue} aria-label="copy button">
                <span ref={ref}>Copy</span>
                    <Icon define={copyIcon} />
            </button>
        </div>
    );
});

export default Buttons;