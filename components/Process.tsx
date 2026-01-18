import Image from "next/image";

export default function Process() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Ľavý stĺpec - Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Budovanie <span className="text-red-600">značky</span> od A po Z
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Silná značka nie je len o logu. Pomáhame klientom vytvoriť kompletnú identitu, ktorá funguje online aj offline. Od prvotného nápadu až po finálnu komunikáciu – všetko pod jednou strechou.
          </p>

          <ul className="space-y-3 text-gray-200 mb-8">
            <li>✅ Tvorba loga a vizuálnej identity</li>
            <li>✅ Moderný web s rýchlym dodaním</li>
            <li>✅ Založenie a nastavenie sociálnych sietí</li>
            <li>✅ Obsahová stratégia, grafika a copywriting</li>
            <li>✅ Dlhodobá správa a podpora značky</li>
          </ul>

          <a
            href="#form"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            Zistiť, čo vieme spraviť pre tvoju značku
          </a>
        </div>

        {/* Pravý stĺpec - Obrázok */}
        <div>
          <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
            <Image
              src="/images/view1.png"
              alt="Ukážka značky"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
