const TOPICS = [
  "Mobile Devices",
  "Police Response",
  "Machine Learning",
  "Attempted Murder",
  "Bitcoin",
  "Operating Systems",
  "Artificial Intelligence",
  "Climate Change",
  "Space Exploration",
];

export default function Subnav() {
  return (
    <div className="flex items-center gap-6 overflow-x-auto pb-4 no-scrollbar">
      {TOPICS.map((topic) => (
        <span
          key={topic}
          className="whitespace-nowrap text-lg font-bold text-brand cursor-pointer hover:opacity-80 transition-opacity"
        >
          {topic}
        </span>
      ))}
    </div>
  );
}
