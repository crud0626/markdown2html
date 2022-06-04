import React from 'react';
import styles from './output.module.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';

const Output = React.forwardRef(({inputValue}, ref) => {
    return(
        <div id='outputbox' ref={ref} className={styles.box}>
            <ReactMarkdown 
                children={inputValue} 
                remarkPlugins={[remarkGfm, remarkEmoji]} 
                components={
                   {a: ({ node, children, ...props}) => {
                        if(!(props.role === "doc-backlink" || props.role === "doc-noteref")) {
                           props['target'] = '_blank';
                           props['rel'] = 'noopener noreferrer';
                        }
                        return <a {...props}>{children}</a>;
                    }}
                }
             />
         </div>
    );
});

export default Output;
