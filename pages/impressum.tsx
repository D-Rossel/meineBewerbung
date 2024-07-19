import React from "react";
import { useThemeContext } from '@/context/ThemeContext';
import styles from "@/pages/page_css/impressum.module.css"

export default function impressum(){

    const { theme } = useThemeContext();

    return(
        <div className={`${styles.impcontainer} ${theme === 'light' ? styles.light : styles.dark}`}>

            <h1>Impressum</h1>
            <br/>
            <p>David Jascha Rossel<br />
            Oestricher Stra&szlig;e 18<br />
            65197 Wiesbaden</p>

            <br/>
            <h2>Kontakt</h2>

            <br/>
            <p>Telefon: 01632357276<br />
            E-Mail: david.rossel@gmx.de</p>

            <br/>
            <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
        </div>
    )
}