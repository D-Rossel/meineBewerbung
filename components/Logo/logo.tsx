import React from "react";
import { useRouter } from 'next/router';
import styles from "@/components/Logo/logo.module.css";
import { useThemeContext } from "@/context/ThemeContext";

export default function logo(){
    const { theme } = useThemeContext();
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/');
    }

    return (
        <button 
            className={`${styles.logo} ${theme === 'light' ? styles.logoLM : styles.logoDM}`}
            onClick={handleLogoClick}
            aria-label="Zur Startseite">
        </button>
    )
}