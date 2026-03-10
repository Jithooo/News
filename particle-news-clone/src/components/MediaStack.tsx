export default function MediaStack({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full aspect-[4/3] group">
      {/* Background stack elements */}
      {images.slice(1, 3).map((img, i) => (
        <div 
          key={i}
          className={`absolute inset-0 rounded-3xl overflow-hidden shadow-lg border border-black/5 transition-transform duration-500`}
          style={{ 
            transform: `translate(${(i + 1) * 8}px, ${(i + 1) * 8}px) rotate(${i % 2 === 0 ? -3 : 3}deg)`,
            zIndex: 10 - i
          }}
        >
          <img src={img} className="w-full h-full object-cover opacity-60" alt="" />
        </div>
      ))}
      
      {/* Primary Image */}
      <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-black/5">
        <img 
          src={images[0]} 
          alt="Main story image" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>
      
      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 z-30 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
          +{images.length - 1} Media
        </div>
      )}
    </div>
  );
}
