export default function StorySidebar({ sources }: { sources: any[] }) {
  return (
    <div className="w-80 hidden xl:block sticky top-24 h-fit">
      <h3 className="text-sm font-bold uppercase tracking-widest text-text-low mb-6">
        Articles ({sources?.length || 0})
      </h3>
      <div className="space-y-4">
        {sources?.map((source, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 cursor-pointer transition-colors border border-transparent hover:border-black/5">
            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center p-1.5">
              <img src={source.logo_url} alt={source.name} className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-text-high truncate">{source.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
