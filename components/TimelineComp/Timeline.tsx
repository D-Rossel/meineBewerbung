import React, { useEffect, useRef } from 'react';
import styles from './Timeline.module.css';
import { useThemeContext } from "@/context/ThemeContext";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Praktikum from "@/public/Icons/praktikum.svg"
import School from "@/public/Icons/school.svg"
import Work from "@/public/Icons/work.svg"
  
export default function Timeline() {
  const { theme } = useThemeContext();
  const boxL = {
    background:  '#DCDCDC',
    color: '#000',
  };

  const boxD = {
    background:  '#6E8BB3',
    color: '#FFF',
  };

  const arrowL = {
    borderRight: '7px solid',
    color:  '#DCDCDC', 
  };

  const arrowD = {
    borderRight: '7px solid',
    color:  '#6E8BB3', 
  };

  const circleL = {
    background:  '#DCDCDC',
    color: '#000',
  };

  const circleD = {
    background:  '#6E8BB3',
    color: '#000',
  };

  const end = {
    background: '#FFFFFF',
    color: '#000',
  }

  

  return(
  <div className={styles.container}>

    <div className={styles.ueb}>
      <h3 className={theme === "light" ? styles.h3_backgroundLightmode : styles.h3_backgroundDarkmode}>Schulischer Werdegang</h3>            
    </div>
    <VerticalTimeline>
      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={theme === "light" ? boxL : boxD}
      date="2000 - 2004"
      iconStyle={theme === "light" ? circleL : circleD}
      contentArrowStyle={theme === "light" ? arrowL : arrowD}
      icon={<School/>}
    >
      <h3 className="vertical-timeline-element-title">Grundschule</h3>
      <h4 className="vertical-timeline-element-subtitle">Ziegelhüttenweg, 65232 Taunusstein</h4>
    </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={theme === "light" ? boxL : boxD}
          contentArrowStyle={theme === "light" ? arrowL : arrowD}
          date="Aug. 2004 – Juni 2010"
          iconStyle={theme === "light" ? circleL : circleD}
          icon={<School/>}
        >
          <h3 className="vertical-timeline-element-title">Mittlere Reife, Werner-von-Siemens-Schule</h3>
          <h4 className="vertical-timeline-element-subtitle">Rheinstraße 102, 65185 Wiesbaden</h4>
          <p>
          Abschlussnote: 2,3
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={theme === "light" ? boxL : boxD}
          date="Aug. 2010 – Juni 2012"
          iconStyle={theme === "light" ? circleL : circleD}
          contentArrowStyle={theme === "light" ? arrowL : arrowD}
          icon={<School/>}
        >
          <h3 className="vertical-timeline-element-title">Fachhochschulreife, Friedrich-Ebert-Schule</h3>
          <h4 className="vertical-timeline-element-subtitle">Balthasar-Neumann-Straße 1, 65189 Wiesbaden</h4>
          <p>Abschlussnote: 2,7
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={theme === "light" ? boxL : boxD}
          date=" Okt. 2012 – Sep. 2018"
          iconStyle={theme === "light" ? circleL : circleD}
          contentArrowStyle={theme === "light" ? arrowL : arrowD}
          icon={<School/>}
        >
          <h3 className="vertical-timeline-element-title">Studium – Informatik</h3>
          <h4 className="vertical-timeline-element-subtitle">Technische Universität Darmstadt, Darmstadt</h4>
          <p>Studiengang: Informatik (nicht abgeschlossenes Studium)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={theme === "light" ? boxL : boxD}
          date="Okt. 2018 – heute"
          iconStyle={theme === "light" ? circleL : circleD}
          contentArrowStyle={theme === "light" ? arrowL : arrowD}
          icon={<School/>}
        >
          <h3 className="vertical-timeline-element-title">Studium – Medieninformatik</h3>
          <h4 className="vertical-timeline-element-subtitle">Hochschule RheinMain, Wiesbaden</h4>
          <p>
          Studiengang: Medieninformatik <br/>
          Notendurchschnitt: 2,3
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={end}
          icon={<School/>}
        />
    </VerticalTimeline>
    <div className={styles.ueb}>
      <h3 className={theme === "light" ? styles.h3_backgroundLightmode : styles.h3_backgroundDarkmode}>Praktika</h3>            
    </div>

  <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={theme === "light" ? boxL : boxD}
        date="Aug. 2010 – Juni 2011"
        iconStyle={theme === "light" ? circleL : circleD}
        contentArrowStyle={theme === "light" ? arrowL : arrowD}
        icon={<Praktikum/>}
      >
        <h3 className="vertical-timeline-element-title">REFILL Datentechnik GmbH </h3>
        <h4 className="vertical-timeline-element-subtitle">Ländchenweg 2a, 65191 Wiesbaden</h4>
        <p>Jahrespraktikum im Rahmen der Fachhochschulreife
        </p>
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={end}
        icon={<Praktikum/>}
      />
  </VerticalTimeline>

  <div className={styles.ueb}>
    <h3 className={theme === "light" ? styles.h3_backgroundLightmode : styles.h3_backgroundDarkmode}>Nebentätigkeiten</h3>            
  </div>
  <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={theme === "light" ? boxL : boxD}
        date="Sep. 2010 – Nov. 2019"
        iconStyle={theme === "light" ? circleL : circleD}
        contentArrowStyle={theme === "light" ? arrowL : arrowD}
        icon={<Work/>}
      >
        <h3 className="vertical-timeline-element-title">Raumpfleger</h3>
        <h4 className="vertical-timeline-element-subtitle">Steuerbüro Gündel & Arnold, Wiesbaden</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={theme === "light" ? boxL : boxD}
        date="Juli 2017 – Aug. 2018 "
        iconStyle={theme === "light" ? circleL : circleD}
        contentArrowStyle={theme === "light" ? arrowL : arrowD}
        icon={<Work/>}
      >
        <h3 className="vertical-timeline-element-title">Tanzlehrer</h3>
        <h4 className="vertical-timeline-element-subtitle">Tanzwerkstatt, Otto-Röhm-Straße 68, 64293 Darmstadt</h4>
        <p>Leitung eines Tanzkurses</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={theme === "light" ? boxL : boxD}
        date="Jan. 2012 – heute"
        iconStyle={theme === "light" ? circleL : circleD}
        contentArrowStyle={theme === "light" ? arrowL : arrowD}
        icon={<Work/>}
      >
        <h3 className="vertical-timeline-element-title">Tanzlehrer</h3>
        <h4 className="vertical-timeline-element-subtitle">Freiberuflich</h4>
        <p>Tanzworkshops an schulischen Einrichtungen</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={theme === "light" ? boxL : boxD}
        date="Sep. 2019 – Apr. 2022"
        iconStyle={theme === "light" ? circleL : circleD}
        contentArrowStyle={theme === "light" ? arrowL : arrowD}
        icon={<Work/>}
      >
        <h3 className="vertical-timeline-element-title">Werkstudent</h3>
        <h4 className="vertical-timeline-element-subtitle">Willis Towers Watson - Wettinerstraße 3, 65189 Wiesbaden</h4>
        <p>„Testautomatisierung, Unit Testing“</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={theme === "light" ? boxL : boxD}
        date="Okt. 2023 – heute"
        iconStyle={theme === "light" ? circleL : circleD}
        contentArrowStyle={theme === "light" ? arrowL : arrowD}
        icon={<Work/>}
      >
        <h3 className="vertical-timeline-element-title">Werkstudent</h3>
        <h4 className="vertical-timeline-element-subtitle">Wissenschaftliche Hilfskraft an der Hochschule RheinMain</h4>
        <p>Leiter der Mathematik Tutorien: Lineare Algebra und Analysis
          <br/>Peer-Mentor beim Peer-Mentoring-Programm
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={end}
        icon={<Work/>}
      />
    </VerticalTimeline>
  </div>
  )
}
  
  