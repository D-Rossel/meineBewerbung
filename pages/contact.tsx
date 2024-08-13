import React from "react";
import { useThemeContext } from '@/context/ThemeContext';
import styles from "./page_css/contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const { theme } = useThemeContext();

    return (
        <div className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}>
            <div className={styles.mecontainer}>
                <div className={styles.me}/>
            </div>

            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h1>CONTACT ME</h1>
                    <div className={styles.contactItem}>
                        <FaEnvelope className={styles.contactIcon} />
                        <div className={styles.contactText}>
                            <p><a href="mailto:david.rossel@student.hs-rm.de?subject=Einladung zum Vorstellungsgespräch&body=Hallo David,">david.rossel@student.hs-rm.de</a></p>
                            <p><a href="mailto:david.rossel@gmx.de?subject=Einladung zum Vorstellungsgespräch&body=Hallo David,">david.rossel@gmx.de</a></p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt className={styles.contactIcon} />
                        <div className={styles.contactText}>
                            <p>David Rossel</p>
                            <p>Oestricher Straße 18</p>
                            <p>65197 Wiesbaden</p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <FaPhone className={styles.contactIcon} />
                        <div className={styles.contactText}>
                            <p>0163 2357276</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}