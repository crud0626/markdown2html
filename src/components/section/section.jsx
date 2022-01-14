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
        const inputArea = document.querySelector('#inputbox');
        if (inputArea.value) {
            navigator.clipboard.writeText(inputArea.value)
            .then()
            .catch(error => console.log(`Failed copy! : ${error}`))
        }
    }

    const uploadFile = (event) => {
        const file = new FileReader();
        file.onload = () => {
            setText(file.result);
        }
        file.readAsText(event.target.files[0]);
    }

    const downloadMD = () => {
        let link = document.createElement("a");
        link.download = "README.md";
        const blob = new Blob([text], {type: "text/plain"})
        link.href = window.URL.createObjectURL(blob);
        link.click();
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
                    downloadMD={downloadMD}
                />
            </div>
        </section>
    );
}

export default Section;