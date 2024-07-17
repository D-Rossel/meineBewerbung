import { Inter } from "next/font/google";
import styles from "@/pages/page_css/anschreiben.module.css";
import { AnschreibenBG } from "@/components/Anschreiben/AnschreibenBG";
import { useThemeContext } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Anschreiben() {
  const { theme } = useThemeContext();

  return (
    <div className={`${styles.container} ${theme === 'light' ? styles.containerDark : styles.containerLight}`}>
      <AnschreibenBG />
    </div>
  );
}