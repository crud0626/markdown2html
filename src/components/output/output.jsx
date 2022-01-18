import React from 'react';
import styles from './output.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';

const Output = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} id='output' className={styles.output_box}>
            <ReactMarkdown 
                children={props.text} 
                remarkPlugins={[remarkGfm, remarkEmoji]} 
                linkTarget="_blank"
              components={
                   {a: ({ node, children, ...props}) => {
                       const linkProps = props;
                         if (props.target === '_blank') {
                            linkProps['rel'] = 'noopener noreferrer';
                       }
                        return <a {...linkProps}>{children}</a>
                    }}
                }
             />
         </div>
    );
});

export default Output;
