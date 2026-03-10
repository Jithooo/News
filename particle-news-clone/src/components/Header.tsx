import { Download } from "lucide-react";
import Image from "next/image";

export default function Header({ minimal = false }: { minimal?: boolean }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/40 backdrop-blur-md z-50 px-6 flex items-center justify-between border-b border-black/5">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
        <div className="w-8 h-8 relative bg-black rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
        </div>
        <span className="text-xl font-bold tracking-tight">Particle.news</span>
      </div>

      <div className="flex items-center gap-6">
        {!minimal && (
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold px-4 py-2 hover:bg-black/5 rounded-full transition-colors">
              Get Newsletter
            </button>
            <button className="text-sm font-semibold px-4 py-2 hover:bg-black/5 rounded-full transition-colors">
              Sign in
            </button>
          </div>
        )}
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-black/80 transition-colors cursor-pointer">
            <Download size={16} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Play Store</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-black/80 transition-colors cursor-pointer">
            <Download size={16} />
            <span className="text-[10px] font-bold uppercase tracking-wider">App Store</span>
          </div>
        </div>
      </div>
    </header>
  );
}
