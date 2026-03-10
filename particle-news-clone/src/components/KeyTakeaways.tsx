export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="space-y-6 my-8">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div className="mt-2 w-2.5 h-2.5 rounded-full bg-brand flex-shrink-0" />
          <p className="text-xl font-serif leading-relaxed text-text-high">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
