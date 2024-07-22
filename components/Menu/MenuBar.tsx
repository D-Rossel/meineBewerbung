import React, { useState, useEffect } from "react";
import { useThemeContext } from '@/context/ThemeContext';
import MenuButton from "./MenuButton/MenuButton";
import styles from "@/components/Menu/MenuBar.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
import Logo from "@/components/Logo/logo";
import MenuDark from '@/public/Icons/menu_dark.svg';
import MenuLight from '@/public/Icons/menu_light.svg';
import Overlay from "./BurgerMenu/Overlay";

function whichBurgerMenu (theme: string){ 
    if (theme === "light") {
        return <MenuLight/>; 
    } 
    else if (theme === "dark" ) { 
        return <MenuDark/>; 
    } 
    else return null; 
} 

export default function Menu() {
    const { theme } = useThemeContext();
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => { setIsOverlayVisible(!isOverlayVisible); };
    return (
        <div>
            <div className={`${styles.header} section-spacing-lr ${theme === 'dark' ? styles.dark : styles.light}`}> 
                <Logo /> 
                <div > 
                <div className={styles.overlay}> 
                    <button className={styles.burgerMenu} onClick={toggleOverlay}> {whichBurgerMenu(theme)} </button> 
                    <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay}/> 
                </div>
                    <div className={`${styles.linkContainer} ${styles.nonOverlay}`}> 
                        <MenuButton link="/" buttonText="Home" /> 
                        <MenuButton link="/anschreiben" buttonText="Anschreiben" /> 
                        <MenuButton link="/lebenslauf" buttonText="Lebenslauf" /> 
                        <MenuButton link="/notenspigel" buttonText="Notenspiegel" /> 
                        <MenuButton link="/contact" buttonText="Kontakt" /> 
                        <MenuButton link="https://github.com/D-Rossel" buttonText="GitHub" /> 
                        <div> 
                            <ToggleButton /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    );
}