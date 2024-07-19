import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import styles from "@/pages/page_css/lebenslauf.module.css"
import Timeline from "@/components/TimelineComp/Timeline";




export default function lebenslauf(){
  const themeContext = useThemeContext();
  return (
    <div>
        <div className={styles.container}>
         <Timeline />
        </div>
    </div>
    
  );
};