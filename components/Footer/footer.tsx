import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import styles from "@/components/footer/footer.module.css";
import MenuButton from "../Menu/MenuButton/MenuButton";
import Logo from "@/components/Logo/logo";

export default function Footer() {
    const { theme } = useThemeContext();

    return (
        <footer className={`
            ${styles.footer} 
            ${theme === 'light' ? styles.footerContainerLightMode : styles.footerContainerDarkMode}
            ${theme === "light" ? "bg_Lightmode" : "bg_Darkmode"}
        `}>
            <div className={styles.footerLinkContainer}>
                <MenuButton buttonText="Impressum" link="/impressum" />
                <MenuButton buttonText="AGB" link="/impressum" />
                <MenuButton buttonText="Datenschutz" link="/impressum" />
            </div>
            <div className={styles.spacer}></div>
        </footer>
    );
}