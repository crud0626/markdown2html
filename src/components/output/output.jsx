import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './output.module.css';

const Output = ({text}) => {
    console.log(text);

    return (
        <div className={styles.output_box}>
            <ReactMarkdown children={text} />
        </div>
    );
}

export default Output;