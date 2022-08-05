import { nanoid } from 'nanoid';
import { leftItems, rightItems } from '../../constants/cheatSheetList';
import styles from '../../styles/cheatsheet.module.scss';
import Sheet from './Sheet/Sheet';

const Cheatsheet = () => (
    <div className={`${styles.container} cheatsheet_container`}>
        <div className={styles.header}>
            <h2>Markdown Cheatsheet</h2>
        </div>
        <div className={styles.body}>
            <div className={styles.content}>
                {
                    leftItems.map(item => <Sheet key={nanoid()} { ...item } />)
                }
            </div>
            <div className={styles.content}>
                {
                    rightItems.map(item => <Sheet key={nanoid()} { ...item } />)
                }
            </div>
        </div>
    </div>
);

export default Cheatsheet;
