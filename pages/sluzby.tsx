import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function SluzbyPage() {
  return (
    <>
      <Head>
        <title>Služby | FLPstudio.sk</title>
        <meta
          name="description"
          content="Zistite, aké kreatívne služby ponúkame – grafický dizajn, webstránky, sociálne siete, video produkcia a fotografia."
        />
      </Head>

      <div className="relative text-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow max-w-[1200px] mx-auto px-6 py-20">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-4">
            Čo pre teba <span className="text-red-600">vieme spraviť?</span>
          </h1>
          <p className="text-center text-white/70 max-w-[700px] mx-auto mb-12">
            Vyber si konkrétnu službu a zisti, ako ti vieme pomôcť posunúť značku na nový level.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Karta 1 */}
            <ServiceCard
              href="/sluzby/graficky-dizajn"
              emoji="🎨"
              title="Grafický dizajn"
              description="Logá, bannery, branding či tlačoviny na mieru – originálne a kreatívne."
            />

            {/* Karta 2 */}
            <ServiceCard
              href="/sluzby/webstranky"
              emoji="💻"
              title="Tvorba webstránok"
              description="Moderné, responzívne a rýchle weby zamerané na výsledky."
            />

            {/* Karta 3 */}
            <ServiceCard
              href="/sluzby/socialne-siete"
              emoji="📱"
              title="Správa sociálnych sietí"
              description="Obsah, plánovanie a stratégie pre rast tvojej značky."
            />

            {/* Karta 4 */}
            <ServiceCard
              href="/sluzby/video-tvorba"
              emoji="🎬"
              title="Video tvorba"
              description="Reklamné videá, reels, eventy či produktová video produkcia."
            />

            {/* Karta 5 */}
            <ServiceCard
              href="/sluzby/fotograficke-sluzby"
              emoji="📷"
              title="Fotografické služby"
              description="Produktové, portrétne aj eventové fotenie v profi kvalite."
            />
          </div>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

function ServiceCard({
  href,
  emoji,
  title,
  description,
}: {
  href: string;
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="bg-neutral-900 hover:bg-neutral-800 transition border border-white/10 rounded-2xl p-6 shadow-md"
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </Link>
  );
}
