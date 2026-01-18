// components/Bubbles.tsx
export default function Bubbles() {
  const items = [
    { emoji: "🌸", text: "Branding na mieru" },
    { emoji: "⚡", text: "Rýchle dodanie" },
    { emoji: "🌟", text: "Unikátny vizuál" },
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full shadow-sm text-sm font-medium transition hover:scale-[1.03]"
        >
          <span>{item.emoji}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
