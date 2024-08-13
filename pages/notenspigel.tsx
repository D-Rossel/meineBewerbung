import React, { useState } from 'react';
import styles from '@/pages/page_css/notenspigel.module.css';
import { useThemeContext } from '@/context/ThemeContext';

const data = [
  ["1","Einführung in die Medieninformatik", "Calvus", 5, "2,0"],
  ["1","Programmieren 1", "Berdux", 7, "2,0"],
  ["1","Einführung in die Gestaltung", "Pedersen", 8, "3,0"],
  ["1","Analysis", "Reichenauer", 5, "1,0"],
  ["1","Grundlagen der Betriebswirtschaftslehre", "Hünemohr", 5, "3,0"],
  ["2","Algorithmen und Datenstrukturen", "Krechel", 5, "3,3"],
  ["2","Auszeichnungssprachen", "Calvus, Schaible", 5, "1,3"],
  ["2","Programmieren 2", "Weitz", 5, "3,7"],
  ["2","Gestaltung elektronischer Medien", "Pedersen", 5, "2,3"],
  ["2","Lineare Algebra", "Reichenauer", 5, "3,0"],
  ["3","IT-Recht und Datenschutz", "Breckheimer", 6, "3,3"],
  ["3","Automatentheorie und formale Sprachen", "Krechel", 6, "2,0"],
  ["3","Datenbanksysteme", "Krechel", 6, "2,7"],
  ["3","Entwicklung interaktiver Benutzungsoberflächen", "Berdux", 6, "2,3"],
  ["3","Programmieren 3", "Weitz", 6, "1,7"],
  ["3","Angewandte Mathematik", "Schwanecke", 6, "2,3"],
  ["4","Softwaretechnik", "Weitz", 6, "3,0"],
  ["4","Animation", "Ederer", 6, "1,7"],
  ["4","Rechnernetze und Betriebssysteme", "Schaible", 6, "2,0"],
  ["5","Softwaretechnik-Projekt", "Weitz", 10, "2,0"],
  ["5","Mensch-Computer-Interaktion", "Berdux", 6, "2,0"],
  ["4","Computergrafik", "Schwanecke", 6, "NE"],
  ["4","Webbasierte Anwendungen ", "Weitz", 6, "NE"],
  ["5","Web-Engineering", "Hoyer, Heide", 10, "NE"],
  ["5","Wahlmodul B", "_", 5, "NA"],
  ["7","Portfolio", "Berdux", 10, "NE"],
  ["6","Berufspraktische Tätigkeit", "Weitz", 30, "U"],
  ["7","Wahlmodul Internationalisierung", "_", 5, "U"],
  ["7","Bachelor-Thesis", "_", 15, "NA"]
];

export default function Notenspigel() {
  const [sortConfig, setSortConfig] = useState({ key: 0, direction: 'ascending' });
  const { theme } = useThemeContext();

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key : number) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className={`${styles.pageContainer} ${theme === 'light' ? styles.containerLight : styles.containerDark}`}>
      <div className={styles.container}>
        <div className={styles.tableContainer}>
          <table className={`${styles.table} ${theme === 'light' ? styles.tableLight : styles.tableDark}`}>
            <thead>
              <tr className={styles.headerRow}>
                {['semester','Prüfung', 'Prüfer:in', 'CP', 'Note'].map((header, index) => (
                  <th 
                    key={index} 
                    className={`${styles.headerCell} ${sortConfig.key === index ? styles[`sorted-${sortConfig.direction}`] : ''}`} 
                    onClick={() => requestSort(index)}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={styles.cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`${styles.legend} ${theme === 'light' ? styles.legendLight : styles.legendDark}`}>
              <ul>
                <li><strong>NE</strong> – Note noch nicht eingetragen</li>
                <li><strong>U</strong> – Bleibt Unbenotet</li>
                <li><strong>NA</strong> – Noch Ausstehend</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}