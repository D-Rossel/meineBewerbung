import React from "react";
import { useThemeContext } from '@/context/ThemeContext';
import styles from "./page_css/contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const { theme } = useThemeContext();

    return (
        <div className={`${styles.container} ${theme === 'light' ? 'bg_Lightmode' :'bg_Darkmode'}`}>
            <div className={`${styles.contactContent} ${theme === 'light' ? styles.contentLight : styles.contentDark}`}>
                <h3 className={`${theme === 'light' ? styles.contentLM : styles.contentDM}`}>Kontaktinformationen</h3>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <FaEnvelope className={`${styles.contactIcon} ${theme === 'light' ? styles.contentLM : styles.contentDM}`} />
                        <div className={`${styles.contactText} ${theme === 'light' ? styles.contentLM : styles.contentDM}`}>
                            <p><a href="mailto:david.rossel@student.hs-rm.de?subject=Einladung zum Vorstellungsgespräch&body=Hallo David,">david.rossel@student.hs-rm.de</a></p>
                            <p><a href="mailto:david.rossel@gmx.de?subject=Einladung zum Vorstellungsgespräch&body=Hallo David,">david.rossel@gmx.de</a></p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt className={`${styles.contactIcon} ${theme === 'light' ? styles.contentLM : styles.contentDM}`} />
                        <div className={`${styles.contactText} ${theme === 'light' ? styles.contentLM : styles.contentDM}`}>
                            <p>David Rossel</p>
                            <p>Oestricher Straße 18</p>
                            <p>65197 Wiesbaden</p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <FaPhone className={`${styles.contactIcon} ${theme === 'light' ? styles.contentLM : styles.contentDM}`} />
                        <div className={`${styles.contactText} ${theme === 'light' ? styles.contentLM : styles.contentDM}`}>
                            <p>01632357276</p>
                            <p>0611/8110391</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}