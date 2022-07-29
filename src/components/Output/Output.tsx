import React from 'react';
import styles from '../../styles/output.module.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import remarkBreaks from "remark-breaks";

interface IProps {
    inputValue: string | ArrayBuffer;
}

const Output = React.forwardRef<HTMLDivElement, IProps>(({ inputValue }, ref) => {
    return(
        <div id='outputbox' ref={ref} className={styles.box}>
            {
                typeof inputValue === "string" &&
                <ReactMarkdown 
                children={inputValue} 
                remarkPlugins={[remarkGfm, remarkEmoji, remarkBreaks]} 
                components={{
                    a: ({ node, children, ...props}) => {
                        if(!(props.role === "doc-backlink" || props.role === "doc-noteref")) {
                           props['target'] = '_blank';
                           props['rel'] = 'noopener noreferrer';
                        }
                        return <a {...props}>{children}</a>;
                    
                    }}
                }
             />
            }
         </div>
    );
});

export default Output;
