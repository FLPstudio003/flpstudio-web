import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <>
      <Head>
        <title>{title} | FlipStudio</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}