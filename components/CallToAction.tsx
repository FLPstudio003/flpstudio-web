import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      className={`
        text-white text-center px-6 py-20
        bg-cover bg-center bg-no-repeat
        bg-[url('/images/red-paper-desktop.png')]
        md:bg-[url('/images/red-paper-desktop.png')]
      `}
    >
      <div className="max-w-[900px] mx-auto">

        {/* Animovaný nadpis */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
        >
          Posuň svoju značku na vyšší level
        </motion.h2>

        {/* Podnadpis */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-white/90 mb-10"
        >
          Vytvorme spolu niečo, čo zaujme, predáva a vyčnieva z davu.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/kontakt"
            className="inline-block bg-white text-red-600 font-semibold text-sm sm:text-base px-6 py-3 rounded-full hover:bg-white/90 transition"
          >
            Začni spoluprácu ešte dnes
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
