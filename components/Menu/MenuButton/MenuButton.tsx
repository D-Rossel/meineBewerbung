import Link from 'next/link';
import React from 'react';
import { useOverlay } from '@/context/OverlayContext';
import styles from './MenuButton.module.css';
import { useThemeContext } from '@/context/ThemeContext';
import ExternalLinkIcon from '@/public/Icons/external-link.svg';

interface MenuButtonProps {
    link: string;
    buttonText: string;
}

function MenuButton({ link, buttonText }: MenuButtonProps) {
    const { closeOverlay } = useOverlay();
    const { theme } = useThemeContext();
    const isExternal = link.startsWith('http') || link.startsWith('//');

    return (
        <Link 
            href={link} 
            className={`tagline-medium ${styles.menuButton} ${theme === 'dark' ? styles.dark : styles.light}`}
            onClick={closeOverlay}
        >
            {buttonText}
            {isExternal && <ExternalLinkIcon className={styles.externalLinkIcon} />}
        </Link>
    );
}

export default MenuButton;