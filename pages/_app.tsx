// pages/_app.tsx
import React, { useEffect, useState } from "react";
import { ThemeContextProvider, useThemeContext } from "@/context/ThemeContext";
import "@/styles/globals.css";
import Menubar from "@/components/Menu/MenuBar";
import Footer from '@/components/Footer/footer';
import { useRouter } from 'next/router';
import { OverlayProvider } from '@/context/OverlayContext';
import prefixes from '@/prefixes.json';
import type { AppProps } from "next/app";

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { theme } = useThemeContext();

  React.useEffect(() => {
    const checkPrefix = async () => {
      const path = window.location.pathname;
      const prefix = path.split('/')[1];

      if (prefixes.prefixes.includes(prefix)) {
        localStorage.setItem('name', prefix);
        await router.push('/');
      }
    };

    checkPrefix();
  }, [router]);

  return (
    <div className={theme === 'light' ? "bg_Lightmode" : "bg_Darkmode"}>
      <header>
        <title>David Rossel</title>
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