import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-[#0f0f11] border border-red-600/40 rounded-2xl p-6 text-white text-center shadow-2xl">
        <h3 className="text-xl font-semibold mb-3">
          Používame <span className="text-red-600">cookies</span>
        </h3>

        <p className="text-sm text-white/80 mb-4">
          Tento web používa cookies na zabezpečenie správneho fungovania a
          zlepšenie používateľského zážitku.
        </p>

        <p className="text-xs text-white/60 mb-6">
          Viac informácií nájdeš v{" "}
          <Link
            href="/zasady-ochrany-udajov"
            className="text-red-500 hover:underline"
          >
            zásadách ochrany osobných údajov
          </Link>
          .
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={rejectCookies}
            className="px-5 py-2 rounded-full border border-white/30 text-sm hover:border-white transition"
          >
            Odmietnuť
          </button>

          <button
            onClick={acceptCookies}
            className="px-5 py-2 rounded-full bg-red-600 text-white text-sm hover:bg-red-500 transition"
          >
            Súhlasím
          </button>
        </div>
      </div>
    </div>
  );
}
