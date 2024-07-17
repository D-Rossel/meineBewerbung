import { Inter } from "next/font/google";
import { HomeBG } from "@/components/Home/HomeBg";
import styles from '@/pages/page_css/index.module.css';
import { useThemeContext } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { theme } = useThemeContext();

  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.containerDark : styles.containerLight}`}>
    <HomeBG/>
    </div>  );
}
