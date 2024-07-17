import React from "react";
import { useThemeContext } from '@/context/ThemeContext';
import MenuButton from "./MenuButton/MenuButton";
import styles from "@/components/Menu/MenuBar.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
import { useRouter } from 'next/router';
import Logo from "@/components/Logo/logo";

export default function Menu(){
    const { theme } = useThemeContext();

    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/');
    };

    return(
        <div className={`${styles.header} section-spacing-lr ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.linkContainer}>
                <Logo/>
            
                <MenuButton link="/" buttonText="Home"/>
                <MenuButton link="/anschreiben" buttonText="Anschreiben"/>
                <MenuButton link="/lebenslauf" buttonText="Lebenslauf"/>
                <MenuButton link="/notenspigel" buttonText="Notenspiegel"/>
                <MenuButton link="/contact" buttonText="Kontakt"/>
                <MenuButton link="https://github.com/D-Rossel" buttonText="GitHub"/>
            </div>
            <div>
                <ToggleButton />
            </div> 
        </div>
    )
}