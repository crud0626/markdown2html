import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
        <footer>
            <div className={styles.footer_container}>
                <div className="text">
                    <span>Copyright. All right reversed Yeah!</span>
                </div>
                <div className="links">
                    <a href="#" target="_blank" rel='noreferrer'>
                        yeahyeah
                    </a>
                </div>
            </div>
            
        </footer>
    );

export default Footer;