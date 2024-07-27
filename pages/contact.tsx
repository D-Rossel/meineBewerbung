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
                <svg className={styles.curvedText} viewBox="-30 -40 300 500">
                    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text width="500">
                        <textPath xlinkHref="#curve">
                            CONTACT ME • CONTACT ME 
                        </textPath>
                    </text>
                </svg>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <FaEnvelope className={styles.contactIcon} />
                        <div className={styles.contactText}>
                            <h3>E-Mail</h3>
                            <p><a href="mailto:david.rossel@student.hs-rm.de">david.rossel@student.hs-rm.de</a></p>
                            <p><a href="mailto:david.rossel@gmx.de">david.rossel@gmx.de</a></p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt className={styles.contactIcon} />
                        <div className={styles.contactText}>
                            <h3>Addresse</h3>
                            <p>David Rossel</p>
                            <p>Oestricher Straße 18</p>
                            <p>65197 Wiesbaden</p>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <FaPhone className={styles.contactIcon} />
                        <div className={styles.contactText}>
                            <h3>Telefon</h3>
                            <p>0163 2357276</p>
                            <p>0611 8110391</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}