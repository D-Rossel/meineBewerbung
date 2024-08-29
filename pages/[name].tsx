import { useRouter } from 'next/router';
import { HomeBG } from "@/components/Home/HomeBg";
import styles from '@/pages/page_css/index.module.css';
import { useThemeContext } from "@/context/ThemeContext";
import prefixes from '@/prefixes.json';

import React from "react";


export default function Homepage() {
  const router = useRouter();
  const { theme } = useThemeContext();

  console.log(prefixes.prefixes.map(prefix => ({
    params: { name: prefix }
  })))
  
  // React.useEffect(() => {
  //   if(!router.isReady) return 
  //   const { name } = router.query;
  //   if(typeof name === "string") {

  //     // TODO: check here if somthing is in there
  //     localStorage.setItem('name', name);
  //   }
  // }, [router]);

  React.useEffect(() => {
    if (!router.isReady) return;
    const { name } = router.query;
    
    if (typeof name === "string") {
      const storedName = localStorage.getItem('name');
      
      if (!storedName || storedName === 'beispielfirma') {
        localStorage.setItem('name', name);
      }
    } else if (!localStorage.getItem('name')) {
      localStorage.setItem('name', 'beispielfirma');
    }
  }, [router.isReady, router.query]);
  
  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.containerDark : styles.containerLight}`}>
      <HomeBG/>
    </div>  
  );
};

export async function getStaticPaths() {
  const paths = prefixes.prefixes.map(prefix => ({
    params: { name: prefix }
  }));

  console.log('Generated paths:', paths);

  return {
    paths,
    fallback: false // Ändern  zu 'blocking', für dynamische Pfade zulassen
  };
}

export async function getStaticProps({ params }: {params : { name : string}}) {
  console.log('getStaticProps params:', params);

  return {
    props: {
      name: params.name
    }
  };
}