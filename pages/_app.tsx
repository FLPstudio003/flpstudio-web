import "@/styles/fonts.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CookieConsent from "@/components/CookieConsent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* FIXNÉ POZADIE */}
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/bg_n.png')",
        }}
      />

      {/* OBSAH */}
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
