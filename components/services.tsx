import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";

export default function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const services = [
    {
      icon: "🎨",
      title: "Grafický dizajn",
      description:
        "Originálne logá, bannery, tlačoviny aj branding – všetko dizajnované na mieru, presne podľa tvojej vízie.",
    },
    {
      icon: "💻",
      title: "Tvorba webstránok",
      description:
        "Moderné, responzívne a rýchle weby zamerané na používateľský zážitok, CTA prvky a výsledky.",
    },
    {
      icon: "📱",
      title: "Správa sociálnych sietí",
      description:
        "Pravidelný obsah, pútavé grafiky, stratégia a reklamné kampane pre rast tvojej značky na Instagrame, Facebooku a TikToku.",
    },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section
      ref={ref}
      className="max-w-[1200px] mx-auto px-6 py-24 text-white"
    >
      {/* Nadpis */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Naše <span className="text-red-600">hlavné</span> služby
      </motion.h2>

      {/* Služby */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/10 border border-white/10 backdrop-blur-lg shadow-xl rounded-2xl px-6 py-10 text-center transition hover:shadow-2xl"
            variants={boxVariants}
            initial="hidden"
            animate={controls}
            custom={i}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/sluzby"
          className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition"
        >
          Zobraziť všetky služby
        </Link>
      </div>
    </section>
  );
}
