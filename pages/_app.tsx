// pages/_app.tsx
import React, { useEffect, useState } from "react";
import { ThemeContextProvider, useThemeContext } from "@/context/ThemeContext";
import "@/styles/globals.css";
import Menubar from "@/components/Menu/MenuBar";
import Footer from '@/components/Footer/footer';
import { OverlayProvider } from '@/context/OverlayContext';
import type { AppProps } from "next/app";

import Head from 'next/head';

function AppContent({ Component, pageProps }: AppProps) {
  const { theme } = useThemeContext();

  return (
    <div className={theme === 'light' ? "bg_Lightmode" : "bg_Darkmode"}>
      <Head>
        <title>David Rossel</title>
        <link rel="icon" href="/Icons/Favicon.ico" />
      </Head>
      <header>
        <Menubar/>
      </header>
      <Component {...pageProps}/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}


export default function App(props: AppProps) {
  return (
    <ThemeContextProvider>
        <OverlayProvider>
        <AppContent {...props} />
        </OverlayProvider>
    </ThemeContextProvider>
  );
}