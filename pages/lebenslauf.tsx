import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import styles from "@/pages/page_css/lebenslauf.module.css"
import Timeline from "@/components/TimelineComp/Timeline";




export default function lebenslauf(){
  const themeContext = useThemeContext();
  return (
    <div className={`${themeContext.theme === "light" ? "bg_Lightmode" : "bg_Darkmode"}`}>
        <div className={styles.container}>
         <Timeline />
        </div>
    </div>
    
  );
};