import React from 'react';
import styles from './Overlay.module.css';
import MenuButton from '@/components/Menu/MenuButton/MenuButton';
import { useThemeContext } from "@/context/ThemeContext";
import ToggleButton from '@/components/Menu/ToggleButton/ToggleButton';
import DarkClose from '@/public/Icons/dark close.svg'
import LightClose from '@/public/Icons/light close.svg'

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
}


function whichClose (theme: string){ 
  if (theme === "light") {
      return <LightClose/>; 
  } 
  else if (theme === "dark" ) { 
      return <DarkClose/>; 
  } 
  else return null; 
} 

export default function Overlay({ isVisible, onClose }:OverlayProps) {
  if (!isVisible) return null;

  const { theme } = useThemeContext();

  return (
    <div className={`${styles.overlay} ${theme === 'light' ? "bg_Lightmode" : "bg_Darkmode"}`}>
      <div className={`${theme === 'light' ? styles.light : styles.dark}`}>
      <button className={styles.closeButton} onClick={onClose}>{whichClose(theme)}</button>

      </div>
      <div className={styles.overlayContent}>
        <nav>
          <ul className={`${styles.menuList} ${theme === 'light' ? styles.light : styles.dark}`}>
            <li><MenuButton link="/" buttonText="Home" /></li>
            <li><MenuButton link="/anschreiben" buttonText="Anschreiben" /></li>
            <li><MenuButton link="/lebenslauf" buttonText="Lebenslauf" /></li>
            <li><MenuButton link="/notenspigel" buttonText="Notenspiegel" /></li>
            <li><MenuButton link="/contact" buttonText="Kontakt" /></li>
            <li><MenuButton link="https://github.com/D-Rossel" buttonText="GitHub" /></li>
            <li><ToggleButton /></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};