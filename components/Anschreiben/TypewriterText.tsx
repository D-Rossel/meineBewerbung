import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

function TypewriterText({ text, speed = 90 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, speed);

    return () => clearInterval(typingEffect);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default TypewriterText;