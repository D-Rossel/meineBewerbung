import React, { useState, useEffect } from "react";
import { useThemeContext } from '@/context/ThemeContext';
import MenuButton from "./MenuButton/MenuButton";
import styles from "@/components/Menu/MenuBar.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
import { useRouter } from 'next/router';
import Logo from "@/components/Logo/logo";
import MenuDark from '@/public/Icons/menu_dark.svg';
import MenuLight from '@/public/Icons/menu_light.svg';

function whichBurgerMenu (theme: string){
    if (theme === "light") {
        return <MenuLight/>;
    } else if (theme === "dark" ) {
        return <MenuDark/>;
    }
    else return null;
    
}

export default function Menu() {
    const { theme } = useThemeContext();
    const router = useRouter();
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Überprüfen, ob wir im Browser sind, bevor wir den Event Listener hinzufügen
        if (typeof window !== "undefined") {
            setScreenWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const handleLogoClick = () => {
        router.push('/');
    };

    // Entscheide, ob der spezielle Block für große Bildschirme angezeigt werden soll
    const showSpecialBlock = screenWidth && screenWidth >= 1024; // Beispiel: Zeige den Block ab einer Breite von 1024px an

    return (
        <div>
            {showSpecialBlock ? (
                <div className={`${styles.header} section-spacing-lr ${theme === 'dark' ? styles.dark : styles.light}`}>
                    <div className={styles.linkContainer}>
                        <Logo />
                    
                        <MenuButton link="/" buttonText="Home" />
                        <MenuButton link="/anschreiben" buttonText="Anschreiben" />
                        <MenuButton link="/lebenslauf" buttonText="Lebenslauf" />
                        <MenuButton link="/notenspigel" buttonText="Notenspiegel" />
                        <MenuButton link="/contact" buttonText="Kontakt" />
                        <MenuButton link="https://github.com/D-Rossel" buttonText="GitHub" />
                    </div>
                    <div>
                        <ToggleButton />
                    </div>
                </div>
            ) : (
                <div className={`${styles.header} section-spacing-lr ${theme === 'dark' ? styles.dark : styles.light}`}>

                    <Logo />
                    {whichBurgerMenu(theme)}
                        
                    <div>
                        <ToggleButton />
                    </div>
                </div>
            )}
        </div>
    );
}
