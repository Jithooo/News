import { Flame, Cpu, Trophy, Film, Rocket, Landmark, Gamepad2 } from "lucide-react";

const CATEGORIES = [
  { name: "Popular", icon: Flame, active: true },
  { name: "Technology", icon: Cpu },
  { name: "Sports", icon: Trophy },
  { name: "Entertainment", icon: Film },
  { name: "Science", icon: Rocket },
  { name: "Politics", icon: Landmark },
  { name: "Economics", icon: Landmark },
  { name: "Video Games", icon: Gamepad2 },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 p-6 hidden lg:block overflow-y-auto">
      <nav className="space-y-1">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all ${
              cat.active
                ? "bg-brand/10 text-brand font-bold ring-1 ring-brand/20"
                : "text-text-low hover:bg-black/5 hover:text-text-high"
            }`}
          >
            <cat.icon size={20} className={cat.active ? "text-brand" : ""} />
            <span className="text-lg">{cat.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
