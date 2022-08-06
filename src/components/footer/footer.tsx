import React from 'react';
import { githubIcon } from '../../constants/iconPath';
import styles from '../../styles/footer.module.scss';
import Icon from '../Icon/Icon';

const Footer = () => (
        <footer>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Copyright 2022.</span>
                    <span>CRUD0626 All rights reserved.</span>
                </div>
                <div className={styles.links_container}>
                    <a 
                        href="https://github.com/crud0626" 
                        target="_blank" 
                        rel='noopener noreferrer' 
                        title='Github'
                        className={styles.link_btn}
                    >
                        <Icon 
                            define={githubIcon}
                            width={496}
                            height={512}
                        />
                    </a>
                </div>
            </div>
            
        </footer>
    );

export default React.memo(Footer);