import Link from "next/link";

interface NewsCardProps {
  slug?: string;
  title: string;
  summary: string;
  image: string;
  count: string;
  time: string;
  color: string;
  className?: string;
}

export default function NewsCard({
  slug,
  title,
  summary,
  image,
  count,
  time,
  color,
  className = "",
}: NewsCardProps) {
  return (
    <Link
      href={`/story/${slug || "#"}`}
      className={`relative group block overflow-hidden rounded-[32px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white ${className}`}
      style={{ "--accent-color": color } as any}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      {/* Dynamic Gradient Overlay */}
      <div 
        className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-opacity duration-500"
        style={{
          background: `linear-gradient(to top, ${color} 0%, ${color}CC 30%, transparent 100%)`,
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
            {count}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
            {time}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:underline decoration-white/40 decoration-2 underline-offset-4">
          {title}
        </h3>
        
        <p className="text-sm font-medium leading-relaxed line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
          {summary}
        </p>
      </div>
    </Link>
  );
}
