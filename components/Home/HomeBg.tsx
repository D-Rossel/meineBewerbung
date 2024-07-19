import styles from './HomeBG.module.css';
import { useThemeContext } from "@/context/ThemeContext";

export function HomeBG () {
  const { theme } = useThemeContext();
  const isLight = theme === "light";

  return (
    <div className={styles.contentContainer}>
      <div className={styles.textContainer}>
        <h1 className={isLight ? styles.h1_backgroundLightmode : styles.h1_backgroundDarkmode}>
          Hallo, ich bin David.
        </h1>
        <h3 className={isLight ? styles.h1_backgroundLightmode : styles.h1_backgroundDarkmode}>
          Ich bin Student an der Hochschule RheinMain und möchte mich bei Ihnen bewerben.
        </h3>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={`${styles.th} ${isLight ? styles.thLight : styles.thDark}`}>
                Geboren in
              </th>
              <th className={`${styles.th} ${isLight ? styles.thLight : styles.thDark}`}>
                Geboren am
              </th>
              <th className={`${styles.th} ${isLight ? styles.thLight : styles.thDark}`}>
                Hobbys
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.td} ${isLight ? styles.tdLight : styles.tdDark}`}>Wiesbaden, DE</td>
              <td className={`${styles.td} ${isLight ? styles.tdLight : styles.tdDark}`}>05. Mai 1993</td>
              <td className={`${styles.td} ${isLight ? styles.tdLight : styles.tdDark}`}>Basketball, Tanzen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.mecontainer}>
        <div className={styles.me}/>
      </div>
      
    </div>
  );
}