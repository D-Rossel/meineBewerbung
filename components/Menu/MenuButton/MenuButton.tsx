import React from 'react';

interface MenuButtonProps {
    link: string;
    buttonText: string;
}

function MenuButton({ link, buttonText} : MenuButtonProps){
    
    return (
        <div>
            <a href={link} className="tagline-medium">
                {buttonText}
            </a>
        </div>
    );
}

export default MenuButton;
