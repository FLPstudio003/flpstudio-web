import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121214] text-white text-sm mt-32">
      {/* HORNÁ ČERVENÁ ČIARA */}
      <div className="w-full h-[3px] bg-red-600" />

      {/* OBSAH */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* NAVIGÁCIA */}
        <div>
          <h4 className="mb-4 text-red-600 font-semibold tracking-wide">
            Navigácia
          </h4>
          <ul className="space-y-2 text-white/70">
            <li>
              <Link href="/" className="hover:text-red-500 transition">
                Domov
              </Link>
            </li>
            <li>
              <Link href="/sluzby" className="hover:text-red-500 transition">
                Služby
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-red-500 transition">
                Portfólio
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-red-500 transition">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* INFORMÁCIE */}
        <div>
          <h4 className="mb-4 text-red-600 font-semibold tracking-wide">
            Informácie
          </h4>

          <ul className="space-y-2 text-white/70 mb-6">
            <li>
              <Link href="/cenova-ponuka" className="hover:text-red-500 transition">
                Cenová ponuka
              </Link>
            </li>
            <li>
              <Link href="/obchodne-podmienky" className="hover:text-red-500 transition">
                Obchodné podmienky
              </Link>
            </li>
            <li>
              <Link
                href="/zasady-ochrany-udajov"
                className="hover:text-red-500 transition"
              >
                Zásady ochrany osobných údajov
              </Link>
            </li>
          </ul>

          {/* SOCIÁLNE SIETE */}
          <div className="flex gap-4 text-white/70 text-lg">
            <a
              href="https://www.facebook.com/people/FLPstudiosk/61564968062511/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-red-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/flpstudio.sk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-red-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/421944449375"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-red-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* KONTAKT */}
        <div>
          <h4 className="mb-4 text-red-600 font-semibold tracking-wide">
            Kontakt
          </h4>
          <ul className="space-y-2 text-white/70">
            <li className="text-white font-medium">FLPstudio.sk</li>
            <li>IČO: 56410697</li>
            <li>
              <a href="tel:+421944449375" className="hover:text-red-500 transition">
                +421 944 449 375
              </a>
            </li>
            <li>
              <a
                href="mailto:info@flpstudio.sk"
                className="hover:text-red-500 transition"
              >
                info@flpstudio.sk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* SPODNÁ ČIARA */}
      <div className="w-full h-px bg-white/10" />

      {/* COPYRIGHT */}
      <div className="py-6 text-center text-xs text-white/40">
        © 2026 | Všetky práva vyhradené spoločnosťou{" "}
        <span className="text-red-600 font-medium">FLP</span>studio.sk
      </div>
    </footer>
  );
}
