import React, { useState } from 'react';
import Input from '../input/input';
import Output from '../output/output';
import styles from './section.module.css';

const Section = (props) => {
    const [text, setText] = useState("");

    const onKeyUp = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <Input onKeyUp={onKeyUp}/>
                <Output text={text}/>
            </div>
        </section>
    );
}

export default Section;