import React from 'react';
import styles from './AnschreibenBG.module.css';
import { useThemeContext } from "@/context/ThemeContext";
import MenuBar from "@/components/Menu/MenuBar";
import TypewriterText from './TypewriterText';

export function AnschreibenBG() {
  const themeContext = useThemeContext();

  const anschreibenText = `
  
David Rossel
Oestricher Straße 18
65197 Wiesbaden
0163 2357276
david.rossel@gmx.de
david.rossel@student.hs-rm.de

SVA System Vertrieb Alexander GmbH
Borsigstraße 26
65205 Wiesbaden

Datum: 15. Juli 2024

Bewerbung für ein Pflichtpraktikum im Bereich Web-Anwendungen

Sehr geehrte Damen und Herren,

auf dem Firmenkontakttag der Hochschule RheinMain am 26. Juni 2024 hatte ich die Gelegenheit, einige Ihrer Mitarbeiter kennenzulernen. Die Gespräche waren sehr angenehm und haben mein Interesse an Ihrem Unternehmen geweckt, weshalb ich mich für ein Pflichtpraktikum bei Ihnen bewerbe.

Im Rahmen meines Studiums der Medieninformatik an der Hochschule RheinMain ist ein Pflichtpraktikum über 800 Arbeitsstunden vorgesehen. Dieses Praktikum möchte ich gerne bei Ihnen absolvieren, um meine theoretischen Kenntnisse in der Praxis zu vertiefen und viele neue Dinge zu lernen.

Während meines Studiums konnte ich mich bereits mit modernen Web-Technologien befassen und dabei Kenntnisse in React, Vue.js und Spring erwerben. Ich habe interaktive Benutzeroberflächen und Single-Page-Applications mit React entwickelt, Front-End-Anwendungen mittels Vue.js erstellt sowie Backend-Services und APIs unter Verwendung von Spring implementiert. Diese praktische Auseinandersetzung hat nicht nur mein Verständnis für Webanwendungen erheblich vertieft, sondern auch mein Interesse an der Softwareentwicklung gesteigert.

Ich bin überzeugt, dass ich mit meiner bisherigen Erfahrung und meiner schnellen Auffassungsgabe einen wertvollen Beitrag zu Ihren Projekten leisten kann. Darüber hinaus bin ich motiviert, Neues zu lernen und mich den Herausforderungen in einem professionellen Umfeld zu stellen.

Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.

Vielen Dank für Ihre Zeit und Ihr Interesse.

Mit freundlichen Grüßen,

David Rossel`;

  return (
    <div className={`${styles.backgroundImage} ${themeContext.theme === "light" ? "bg_Lightmode" : "bg_Darkmode"}`} id="about">
      <MenuBar />
      <div className={styles.container}>
        <pre className={`${themeContext.theme === "light" ? styles.p1_backgroundLightmode : styles.p1_backgroundDarkmode}`}>
          <TypewriterText text={anschreibenText} speed={10} />
        </pre>
      </div>
    </div>
  );
}