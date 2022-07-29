import React from 'react';
import { useState } from 'react';
import Icon from '../icon/icon';
import styles from '../../styles/buttons.module.scss';

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
                    <Icon 
                        define={[`M435 918 c-4 -22 -6 -125 -4 -227 l4 -186 -196 4 c-108 2 -206 0 -218 -4 -30 -9 -30 -61 0 -70 12 -4 110 -6 218 -4 l196 4 -4 -196 c-2 -108 0 -206 4 -218 9 -30 61 -30 70 0 4 12 6 110 4 218 l-4 196 186 -4 c102 -2 205 0 227 4 38 6 42 10 42 35 0 25 -4 29 -42 35 -22 4 -125 6 -227 4 l-186 -4 4 186 c2 102 0 205 -4 227 -6 38 -10 42 -35 42 -25 0 -29 -4 -35 -42`]}
                    />
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
                    <Icon
                        define={[
                            `M330 950 c0 -6 -16 -27 -35 -47 l-35 -36 0 -274 c0 -386 -22 -362 330 -362 229 0 257 1 276 17 44 37 46 51 45 331 0 146 0 274 0 283 -1 9 -16 31 -33 49 -18 18 -32 36 -30 41 1 4 -115 8 -258 8 -175 0 -260 -3 -260 -10z m504 -82 c24 -34 24 -517 0 -553 l-16 -25 -228 0 -228 0 -16 25 c-24 36 -24 519 0 553 15 22 19 22 244 22 225 0 229 0 244 -22z`, 
                            `M101 742 c-19 -9 -44 -30 -55 -45 -20 -27 -21 -44 -24 -300 -2 -150 0 -286 3 -304 3 -18 19 -46 36 -63 l31 -30 291 0 c270 0 294 2 323 19 39 24 61 79 44 111 -21 39 -70 18 -70 -30 0 -49 -6 -50 -290 -50 -246 0 -268 1 -283 18 -15 16 -17 52 -17 296 0 172 4 285 10 297 7 12 21 19 39 19 27 0 61 26 61 47 0 9 -42 33 -58 33 -4 0 -22 -8 -41 -18z`
                        ]} 
                    />
            </button>
        </div>
    );
});

export default Buttons;