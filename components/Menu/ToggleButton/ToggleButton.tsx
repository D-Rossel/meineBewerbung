import React from 'react';
import styles from './ToggleButton.module.css';
import LightModeIcon from '@/public/Icons/toggle_lightmode.svg';
import DarkModeIcon from '@/public/icons/toggle_darkmode.svg';
import { useThemeContext } from '@/context/ThemeContext';

function ToggleButton() {
  const { theme, handleTheme } = useThemeContext();

  const switchTheme = () => {
    handleTheme();
  };

  const buttonClass = `${styles.button} ${theme === "dark" ? styles.dark : ''}`;
  const backgroundClass = `${styles.background} ${theme === "light" ? styles.light : styles.dark}`;
  const buttonContainerClass = `${styles.buttonContainer} ${theme === "light" ? styles.light : styles.dark}`;

  return (
    <div className={backgroundClass}>
      <button onClick={switchTheme} className={buttonClass}>
        <div className={buttonContainerClass}>
          {theme === "dark" ? <DarkModeIcon className={styles.img} /> : <LightModeIcon className={styles.img} />}
        </div>
      </button>
    </div>
  );
};

export default ToggleButton;
