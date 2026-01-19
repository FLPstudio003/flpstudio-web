import "@/styles/fonts.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Background from "@/components/Background";
import CookieConsent from "@/components/CookieConsent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}


