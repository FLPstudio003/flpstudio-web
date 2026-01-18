// pages/_app.tsx

import "@/styles/fonts.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CookieConsent from "@/components/CookieConsent";
import Background from "@/components/Background"; // <- Dôležité!

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background /> {/* <- Pozadie je fixnuté pod všetkým */}
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

