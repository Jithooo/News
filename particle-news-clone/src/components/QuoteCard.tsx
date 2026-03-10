export default function QuoteCard({ quote, author, context }: { quote: string; author: string; context: string }) {
  return (
    <div className="p-8 rounded-[32px] bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
           <div className="w-2 h-2 rounded-full bg-brand" />
        </div>
        <span className="font-bold text-text-high">{author}</span>
      </div>
      <p className="text-2xl font-serif leading-tight text-text-high mb-6 italic">
        {quote}
      </p>
      <div className="text-sm font-medium text-text-low leading-relaxed">
        {context}
      </div>
    </div>
  );
}
