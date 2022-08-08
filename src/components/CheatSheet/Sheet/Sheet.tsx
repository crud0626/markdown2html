import { nanoid } from 'nanoid';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SheetContent } from '../../../constants/cheatSheetList';
import styles from '../../../styles/Sheet.module.scss';

interface IProps {
    title: string;
    contents: SheetContent[];
}

const Sheet = ({ title, contents }: IProps) => {
    return (
        <div className={styles.sheet}>
            <p>{title}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Syntax</th>
                        <th>Results</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(({ name, syntax, results }) => (
                        <tr key={nanoid()}>
                            <td>{name}</td>
                            <td>{syntax}</td>
                            <td>
                                <ReactMarkdown 
                                    children={results || syntax}
                                    remarkPlugins={[remarkGfm]} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Sheet;