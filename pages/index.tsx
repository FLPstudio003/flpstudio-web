import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

import Header from "@/components/Header";
import Bubbles from "@/components/Bubbles";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import WebsiteSection from "@/components/WebsiteSection";
import Services from "@/components/services";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


export default function Home() {
  return (
    <>
      <Head>
        <title>FLPstudio.sk | Domov</title>
        <meta
          name="description"
          content="Branding na mieru, unikátny vizuál a rýchle dodanie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {/* HERO SEKCIA */}
      <main className="relative z-10 mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between py-16 min-h-[80vh]">
        {/* ĽAVÁ STRANA */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Sme tu na to,<br />
            aby sme</span> <span className="text-red-600">oživili tvoje nápady.</span>
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Branding na mieru, rýchle dodanie, unikátny vizuál.
          </p>

          {/* Bubliny */}
          <Bubbles />
        </motion.div>

        {/* PRAVÁ STRANA */}
        <motion.div
          className="flex-1 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/mascot.png"
            alt="FLPstudio postava"
            width={400}
            height={400}
            className="w-[250px] sm:w-[300px] md:w-[360px] object-contain"
            priority
          />
        </motion.div>
      </main>

      {/* PREČO MY */}
      <WhyUs />

      {/* POSTUP SPOLUPRÁCE */}
      <Process />

      {/* WEBSTRANKA */}
      <WebsiteSection />

      {/* SLUŽBY */}
      <Services />

      {/* CTA */}
      <CallToAction />

      {/* FAQ */}
      <FAQ />
      <ScrollToTop />
      {/* FOOTER */}
      <Footer />
    </>
  );
}
