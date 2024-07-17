import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Menubar from "@/components/Menu/MenuBar";
import Footer from '@/components/Footer/footer';
import { useRouter } from 'next/router';
import prefixes from '@/prefixes.json'; // Stellen Sie sicher, dass diese Datei im richtigen Verzeichnis liegt

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const checkPrefix = async () => {
      const path = window.location.pathname;
      const prefix = path.split('/')[1];

      if (prefixes.prefixes.includes(prefix)) {
        localStorage.setItem('name', prefix);
        await router.push('/'); // Weiterleitung zur Startseite
      }
    };

    checkPrefix();
  }, [router]);

  return(
    <ThemeContextProvider>
      <header>
        <title>David Rossel</title>
        <Menubar/>
      </header>
      <Component {...pageProps}/>
      <footer>
        <Footer/>
      </footer>
    </ThemeContextProvider>
  );
}