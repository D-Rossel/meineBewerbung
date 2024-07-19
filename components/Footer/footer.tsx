import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import styles from "@/components/footer/footer.module.css";
import MenuButton from "../Menu/MenuButton/MenuButton";

export default function Footer() {
    const { theme } = useThemeContext();

    return (
        <footer className={`
            ${styles.footer} 
            ${theme === 'light' ? styles.footerContainerLightMode : styles.footerContainerDarkMode}
        `}>
            <div className={`
            ${styles.horizontalLine} 
            ${theme === 'light' ? styles.horizontalLineLM : styles.horizontalLineDM}
        `}/>
            <div className={styles.footerLinkContainer}>
                <MenuButton buttonText="Impressum" link="/impressum" />
                <MenuButton buttonText="Datenschutz" link="/datenschutz" />
            </div>
            <div className={styles.spacer}></div>
        </footer>
    );
}