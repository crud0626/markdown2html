import React, { useCallback, useRef, useState } from 'react';
import Buttons from '../buttons/buttons';
import Cheatsheet from '../cheatsheet/cheatsheet';
import Input from '../input/input';
import Output from '../output/output';
import styles from './section.module.scss';

interface IProps {
    isSheet: boolean;
    isDark: boolean;
}

const Section = ({isSheet, isDark}: IProps) => {
    const [inputValue, setInputValue] = useState<string | ArrayBuffer>("# MD TO HTML\nHello, This is a site that converts markdown into html.\n## Features\n1. You can download it to markdown(.md) or html(.txt)\n2. If you have an already written md file, you can upload it.\n3. The result is the same as Github\n4. It is free!\n\n---\n\n> Thank you, enjoy!");

    const outputRef = useRef<HTMLDivElement>(null);
    const copySpanRef = useRef<HTMLSpanElement>(null);

    const onChangeValue = (value: string): void => {setInputValue(value)};
    const onErase = useCallback((): void => {setInputValue("")}, []);
    
    const copyValue = (): void => {
        if (inputValue && copySpanRef.current) {
                navigator.clipboard.writeText(inputValue as string);

                copySpanRef.current.innerText = "Copied!";
                setTimeout(() => {
                    if (copySpanRef.current) {
                        copySpanRef.current.innerText = "Copy";
                    }
                }, 1500);
                return;
        }
        alert("No value entered");
    }

    const checkFileType = (targetFile: File): void => {
        if (targetFile.type === "text/plain") {
            uploadFile(targetFile);
            return;
        }

        const fileExt = targetFile.name.split(".").pop()?.toLowerCase();
        if (fileExt === "md" || fileExt === "markdown") {
            uploadFile(targetFile);
            return;
        }

        alert("You can only upload text or markdown files.");
    }

    const uploadFile = (targetFile: File): void => {
        const reader = new FileReader();
        reader.onload = () => {
            setInputValue(reader.result as string);
        };

        reader.addEventListener("error", (e) => {
            alert("Error occurs when reading file");
            throw new Error(`Error occurs when reading file : ${e}`);
        });

        reader.readAsText(targetFile);
    }

    const downloadFile = ({target}: React.MouseEvent): void => {
        let data, dataType = "";
        const link = document.createElement("a");
        
        if (outputRef.current && target instanceof HTMLButtonElement) {
            switch(target.dataset.role) {
                case "html":
                    data = outputRef.current.innerHTML;
                    dataType = "text/html";
                    link.download = "mdtohtml.html";
                    break;
                case "markdown":
                    data = inputValue;
                    dataType = "text/plain";
                    link.download = "README.md";
                    break;
                default:
                    alert("Undefined role.");
                    throw new Error("Undefined role.");
            }
        }

        if(data) {
            const blobData = new Blob([data], {type: dataType});
            link.href = window.URL.createObjectURL(blobData);
            link.click();
        }
    }

    return (
        <section className={`${styles.container} ${isDark ? "dark" : ""}`}>
            {!isSheet && 
            <>
                <Buttons 
                    ref={copySpanRef}
                    copyValue={copyValue}
                    downloadFile={downloadFile}
                    checkFileType={checkFileType}
                />
                <div className={styles.section}>
                    <Input 
                        inputValue={inputValue}
                        checkFileType={checkFileType}
                        onChangeValue={onChangeValue}
                        onErase={onErase}
                    />
                    <Output 
                        ref={outputRef}
                        inputValue={inputValue} 
                    />
                </div>
            </>
            }
            {isSheet && <Cheatsheet />}
        </section>
    );
}

export default Section;