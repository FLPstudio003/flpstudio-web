import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ObchodnePodmienky() {
  return (
    <>
      <Head>
        <title>Obchodné podmienky | FLPstudio.sk</title>
        <meta name="description" content="Obchodné podmienky pre služby FLPstudio.sk" />
      </Head>

      <div className="text-white min-h-screen flex flex-col bg-transparent">
        <Header />

        <main className="flex-grow max-w-[900px] mx-auto px-6 py-20">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-12">
            Obchodné <span className="text-red-600">podmienky</span>
          </h1>

          <section className="space-y-10 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-red-600">1. Úvodné ustanovenia</h2>
              <p><b><span className="text-red-600">1.1.</span></b> Tieto obchodné podmienky upravujú právne vzťahy medzi FLPstudio.sk ("dodávateľ") a klientom ("objednávateľ"), ktorý si objednáva grafické, fotografické alebo webové služby.</p>
              <p><b><span className="text-red-600">1.2.</span></b> Objednávateľ súhlasom objednávky potvrdzuje, že sa s týmito obchodnými podmienkami oboznámil a súhlasí s nimi.</p>
              <p><b><span className="text-red-600">1.3.</span></b> Identifikačné údaje:<br />
                Názov: FLPstudio.sk<br />
                Meno a priezvisko: Filip Pavlík<br />
                Sídlo: 1. Mája 372, 049 41, Krásnohorské Podhradie<br />
                IČO: 56410697<br />
                E-mail: info@flpstudio.sk<br />
                Tel.: +421 944 449 375<br />
                Web: www.flpstudio.sk
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-600">2. Poskytované služby</h2>
              <p><b><span className="text-red-600">2.1.</span></b> Poskytovateľ ponúka nasledujúce služby:</p>
              <ul className="list-disc list-inside pl-4">
                <li>Tvorba loga a identity značky</li>
                <li>Vizuálne návrhy (letáky, bannery, vizitky atď.)</li>
                <li>Grafické spracovanie</li>
                <li>Branding na mieru</li>
                <li>Webové dizajny</li>
                <li>Fotografovanie produktov a služieb</li>
                <li>Video produkcia</li>
              </ul>
              <p><b><span className="text-red-600">2.2.</span></b> Poskytovateľ si vyhradzuje právo odmietnuť realizáciu objednávky, ak je v rozpore s dobrými mravmi alebo zákonmi SR.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-600">3. Objednávka a platobné podmienky</h2>
              <p><b><span className="text-red-600">3.1.</span></b> Objednávateľ si môže služby objednať e-mailom, cez sociálne siete alebo telefonicky.</p>
              <p><b><span className="text-red-600">3.2.</span></b> Po dokončení diela je objednávateľ povinný doplatiť zvyšnú sumu pred odovzdaním finálnej verzie.</p>
              <p><b><span className="text-red-600">3.3.</span></b> Faktúra je splatná do 7 dní od jej vystavenia.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-600">4. Dodacie lehoty a revízie</h2>
              <p><b><span className="text-red-600">4.1.</span></b> Termíny dodania sú dohodnuté individuálne pri každej objednávke.</p>
              <p><b><span className="text-red-600">4.2.</span></b> Štandardne sú dodávky dodané do 5 – 10 pracovných dní, v závislosti od náročnosti projektu.</p>
              <p><b><span className="text-red-600">4.3.</span></b> Objednávateľ má právo na 2 bezplatné revízie dizajnu. Každá ďalšia úprava sa účtuje podľa platného hodinového cenníka.</p>
              <p><b><span className="text-red-600">4.4.</span></b> Pri službách s fotografickým obsahom je odovzdaná finálna verzia základovo upravených fotografií.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-600">5. Autorské práva a licencie</h2>
              <p><b><span className="text-red-600">5.1.</span></b> Po úhrade diela získa klient právo použiť výstupy na svoje prezentačné účely (napr. web, sociálne siete, tlačové materiály). Tieto výstupy nesmie ďalej predávať alebo upravovať bez súhlasu dodávateľa.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-600">6. Odstúpenie od zmluvy a storno podmienky</h2>
              <p><b><span className="text-red-600">6.1.</span></b> Objednávateľ môže zrušiť objednávku pred začatím prác bez poplatku.</p>
              <p><b><span className="text-red-600">6.2.</span></b> Ak bola práca už začatá, storno poplatok je dohodou alebo vo výške odpracovaných hodín.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-600">7. Ochrana osobných údajov</h2>
              <p><b><span className="text-red-600">7.1.</span></b> Objednávateľ poskytuje svoje osobné údaje len za účelom vybavenia objednávky a fakturácie.</p>
              <p><b><span className="text-red-600">7.2.</span></b> Osobné údaje nebudú poskytnuté tretím stranám.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-600">8. Záverečné ustanovenia</h2>
              <p><b><span className="text-red-600">8.1.</span></b> Tieto obchodné podmienky sú platné od zverejnenia na stránke flpstudio.sk</p>
              <p><b><span className="text-red-600">8.2.</span></b> V prípade sporu sa strany zaväzujú riešiť ho dohodou.</p>
            </div>
          </section>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}
