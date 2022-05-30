import React from 'react';
import styles from './cheatsheet.module.scss';

const Cheatsheet = (props) => (
        <div className={`${styles.container} cheatsheet_container`}>
            <div className={styles.header}>
                <h2>Markdown Cheatsheet</h2>
            </div>
            <div className={styles.body}>
                <div className={styles.sheet_container}>
                    <div className={styles.sheet}>
                        <p>Basic Syntax</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Heading<br/>(h1~h6)</td>
                                    <td># h1<br/>###### h6</td>
                                    <td><h1>h1</h1><br/><h6>h6</h6></td>
                                </tr>
                                <tr>
                                    <td>Bold</td>
                                    <td>**Bold**</td>
                                    <td><strong>Bold</strong></td>
                                </tr>
                                <tr>
                                    <td>Italic</td>
                                    <td>*Italic*</td>
                                    <td><em>Italic</em></td>
                                </tr>
                                <tr>
                                    <td>Bold and Italic</td>
                                    <td>***Bold and Italic***</td>
                                    <td><em><strong>Bold and Italic</strong></em></td>
                                </tr>
                                <tr>
                                    <td>Strikethrough</td>
                                    <td>~~Strikethrough~~</td>
                                    <td><del>Strikethrough</del></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.sheet}>
                        <p>Line Breaks</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>---, ===, ***</td>
                                    <td><hr /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.sheet}>
                        <p>Block Quotes</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> text</td>
                                    <td><blockquote className='sheet_quote'>text</blockquote></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.sheet}>
                        <p>Lists</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ul</td>
                                    <td>* list<br/>* list<br/>* list</td>
                                    <td>
                                        <ul>
                                            <li>list</li><br/>
                                            <li>list</li><br/>
                                            <li>list</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ol</td>
                                    <td>1. list<br/>2. list<br/>3. list</td>
                                    <td>
                                        <ol>
                                            <li>list</li><br/>
                                            <li>list</li><br/>
                                            <li>list</li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.sheet_container}>
                    <div className={styles.sheet}>
                        <p>Code</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>code</td>
                                    <td>`code`</td>
                                    <td><code>code</code></td>
                                </tr>
                                <tr>
                                    <td>Fenced Code Block</td>
                                    <td>```<br/>code blocks<br/>```</td>
                                    <td><pre>
                                        {`function test() {  \n  console.log("test!");\n}`}
                                        </pre>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.sheet}>
                        <p>Links and Images</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Link</td>
                                    <td>[google](https://www.google.com)</td>
                                    <td><a href="https://www.google.com" target="_blank" rel='noopener noreferrer'>Google</a></td>
                                </tr>
                                <tr>
                                    <td>Image</td>
                                    <td>![name](URL)</td>
                                    <td><img width="100px" height="100px" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.sheet}>
                        <p>Horizontal Rule</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>---, ===, ***</td>
                                    <td><hr /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.sheet}>
                        <p>Task Lists</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Syntax</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        - [x] task1<br/>
                                        - [ ] task2<br/>
                                        - [ ] task3
                                    </td>
                                    <td>
                                        <ul className={styles.task_list}>
                                            <li>
                                                <input type="checkbox" disabled checked />
                                                task1
                                            </li>
                                            <li>
                                                <input type="checkbox" disabled />
                                                task2
                                            </li>
                                            <li>
                                                <input type="checkbox" disabled />
                                                task3
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

export default Cheatsheet;
