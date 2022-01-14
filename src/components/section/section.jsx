import React, { useCallback, useState } from 'react';
import Buttons from '../buttons/buttons';
import Input from '../input/input';
import Output from '../output/output';
import styles from './section.module.css';

const Section = (props) => {
    const [text, setText] = useState("# MD TO HTML\nHello, This is a site that converts markdown into html.\n## Features\n1. You can download it to markdown(.md) or html(.txt)\n2. If you have an already written md file, you can upload it.\n3. The result is the same as Github\n4. It is free!\n\n---\n\n> Thank you, enjoy!");

    const changeFormValue = (event) => {
        setText(event.target.value);
    }

    const onClickEraser = useCallback(() => {
        setText("");
    })

    const copyText = () => {
        const input = document.querySelector('#inputbox');
        input.select();
        navigator.clipboard.write(text);
    }

    const uploadFile = (event) => {
        const file = new FileReader();
        file.onload = () => {
            setText(file.result);
        }
        file.readAsText(event.target.files[0]);
    }

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <Input 
                    changeFormValue={changeFormValue}
                    onClickEraser={onClickEraser}
                    text={text}
                />
                <Output text={text} />
            </div>
            <div className={styles.buttons_container}>
                <Buttons 
                    copyText={copyText}
                    uploadFile={uploadFile}
                />
            </div>
        </section>
    );
}

export default Section;