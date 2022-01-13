import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
        <footer>
            <div className={styles.footer_container}>
                <div className="text">
                    <span>Copyright 2022. CRUD0626 All rights reserved.</span>
                </div>
                <div className={styles.links_container}>
                    <a 
                        href="https://github.com/crud0626" 
                        target="_blank" 
                        rel='noopener noreferrer' 
                        title='Github'
                        className={styles.link_btn}
                    >
                            <img src="./images/GitHub-Mark-Light-32px.png" alt="github" />
                    </a>
                </div>
            </div>
            
        </footer>
    );

export default Footer;