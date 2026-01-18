import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
      <div className="flex w-[90%] md:max-w-[1200px] items-center justify-between rounded-full bg-white/10 px-6 py-4 shadow-md backdrop-blur-md">
        {/* Logo */}
        <Link href="/">
          <span className="text-lg font-bold text-white">
            F<span className="text-red-600">L</span>Pstudio<span className="text-red-600">.</span>sk
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-white">
          <Link href="/sluzby" className="hover:underline">Služby</Link>
          <Link href="/portfolio" className="hover:underline">Portfólio</Link>
          <Link href="/kontakt" className="hover:underline">Kontakt</Link>
          <Link href="/cenova-ponuka" className="rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600">
            Získať cenovú ponuku
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[76px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white/10 text-white rounded-xl shadow-md backdrop-blur-md px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-4 text-sm">
            <Link href="/sluzby" className="hover:underline" onClick={() => setMenuOpen(false)}>Služby</Link>
            <Link href="/portfolio" className="hover:underline" onClick={() => setMenuOpen(false)}>Portfólio</Link>
            <Link href="/kontakt" className="hover:underline" onClick={() => setMenuOpen(false)}>Kontakt</Link>
            <Link
              href="/cenova-ponuka"
              className="rounded-full bg-red-500 px-4 py-2 text-white text-center hover:bg-red-600"
              onClick={() => setMenuOpen(false)}
            >
              Získať ponuku
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
