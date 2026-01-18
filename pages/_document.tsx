// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sk">
      <Head>
        {/* FAVICON */}
        <link rel="icon" href="/favicon.png" />

        {/* pre lepšiu podporu */}
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#e11d48" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
