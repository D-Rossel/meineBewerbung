import React, { useEffect, useState } from 'react';
import styles from './AnschreibenBG.module.css';
import { useThemeContext } from '@/context/ThemeContext';
import TypewriterText from './TypewriterText';
import anschreibenData from '@/components/Anschreiben/Firmen.json';

export function AnschreibenBG() {
  const themeContext = useThemeContext();
  const [firmenname, setFirmenname] = useState<string | null>(null);
  const [firmenData, setFirmenData] = useState<any>(null);

  useEffect(() => {
    const name = localStorage.getItem('name');
    setFirmenname(name);
    if (name) {
      const data = anschreibenData.firmen[name as keyof typeof anschreibenData.firmen];
      setFirmenData(data);
    }
  }, []);

  const bewerberData = anschreibenData.bewerber;

  if (!firmenData) {
    return <div>Firma nicht gefunden</div>;
  }

  const anschreibenText = `
${bewerberData.name}
${bewerberData.strasse}
${bewerberData.plz} ${bewerberData.ort}
${bewerberData.telefon}
${bewerberData.email.join('\n')}

${firmenData.name}
${firmenData.strasse}
${firmenData.plz} ${firmenData.ort}

${firmenData.anschreiben.datum}

${firmenData.anschreiben.betreff}

${firmenData.anschreiben.anrede}

${firmenData.anschreiben.inhalt.join('\n\n')}

${firmenData.anschreiben.grussformel}

${firmenData.anschreiben.unterschrift}
  `;

  return (
    <div className={`${styles.backgroundImage}`} id="about">
      <div className={styles.container}>
        <pre className={`${themeContext.theme === 'light' ? styles.p1_backgroundLightmode : styles.p1_backgroundDarkmode}`}>
          <TypewriterText text={anschreibenText} speed={5} />
        </pre>
      </div>
    </div>
  );
}