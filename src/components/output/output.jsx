import React from 'react';
import styles from './output.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const Output = ({text}) => {
    return (
        <div id='output' className={styles.output_box}>
            <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
        </div>
    );
}

export default Output;