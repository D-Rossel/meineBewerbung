import Link from 'next/link';
import React from 'react';
import { useOverlay } from '@/context/OverlayContext';

interface MenuButtonProps {
    link: string;
    buttonText: string;
}

function MenuButton({ link, buttonText }: MenuButtonProps) {
    const { closeOverlay } = useOverlay();

    return (
        <Link href={link} className={`tagline-medium`}onClick={closeOverlay}>
            {buttonText}
        </Link>
    );
}

export default MenuButton;