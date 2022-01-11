import React, { useCallback, useState } from 'react';
import Input from '../input/input';
import Output from '../output/output';
import styles from './section.module.css';

const Section = (props) => {
    const [text, setText] = useState("blahblah");

    const changeFormValue = (event) => {
        setText(event.target.value);
    }

    const onClickEraser = useCallback(() => {
        setText("");
    })

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
        </section>
    );
}

export default Section;