import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Subnav from "@/components/Subnav";
import NewsCard from "@/components/NewsCard";

const CURATED_NEWS = [
  {
    title: "Critical Escalation: U.S. Warns Iran Over Hormuz Chokepoint",
    summary: "President Trump signals that the U.S.-Israel-Iran conflict is 'ahead of schedule,' warning of severe retaliation as oil prices spike globally.",
    image: "https://images.unsplash.com/photo-1547049082-1a12c3bf2946?auto=format&fit=crop&q=80&w=800",
    count: "1.2K ARTICLES",
    time: "42M AGO",
    color: "#450a0a", // maroon-950
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "AI in Warfare: Targeted Intelligence in Middle East Conflict",
    summary: "Controversy grows as AI is deployed for target selection in international conflicts, sparking a global grassroots movement for ethical regulation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    count: "324 ARTICLES",
    time: "1H AGO",
    color: "#0f172a", // slate-900
  },
  {
    title: "Satellite Re-entry: NASA's Van Allen Probe A Crashes Today",
    summary: "After 14 years in orbit, the 1,300-pound satellite is projected to re-enter Earth's atmosphere, marking the end of a historic scientific mission.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    count: "156 ARTICLES",
    time: "2H AGO",
    color: "#1e3a8a", // blue-900
  },
  {
    title: "Harry Styles Drops Surprise 4th Album: 'KISS ALL THE TIME'",
    summary: "The British icon embraces disco-pop in his latest release, which has already shattered streaming records within hours of its midnight debut.",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
    count: "89 ARTICLES",
    time: "3H AGO",
    color: "#831843", // pink-900
  },
  {
    title: "T20 World Cup: India Faces Australia in Historic Final",
    summary: "Sanju Samson wins Player of the Tournament as India prepares for a high-stakes title decider following their victory over New Zealand.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
    count: "567 ARTICLES",
    time: "5H AGO",
    color: "#1e1b4b", // indigo-950
  },
  {
    title: "TSA Chaos: Government Shutdown Disrupts Major Airports",
    summary: "Hours-long lines reported as unpaid TSA officers struggle to manage surging crowds during the ongoing federal budget standoff.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800",
    count: "245 ARTICLES",
    time: "6H AGO",
    color: "#111827", // gray-900
  },
  {
    title: "Siri x Gemini: Apple and Google Reveal New AI Partnership",
    summary: "A landmark deal brings Google's advanced LLMs to the iPhone, promising a fundamental shift in how Siri perceives and interacts with user data.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    count: "890 ARTICLES",
    time: "8H AGO",
    color: "#0c4a6e", // sky-900
  },
  {
    title: "Global Warming Spike: Record 0.35°C Temp Rise This Decade",
    summary: "Environmental scientists express alarm at the accelerating rate of global warming, calling for immediate systemic shifts in energy production.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    count: "434 ARTICLES",
    time: "10H AGO",
    color: "#064e3b", // emerald-950
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <Sidebar />
      
      <main className="lg:ml-64 p-6 lg:p-12 max-w-7xl mx-auto">
        <Subnav />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CURATED_NEWS.map((news, i) => (
            <NewsCard key={i} {...news} />
          ))}
        </div>
        
        <footer className="mt-24 pb-12 border-t border-black/5 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-[13px] font-medium text-text-low">
            <div className="flex flex-wrap items-center gap-6">
              <span className="cursor-pointer hover:text-text-high">Blog</span>
              <span className="cursor-pointer hover:text-text-high">Jobs</span>
              <span className="cursor-pointer hover:text-text-high">Terms of Service</span>
              <span className="cursor-pointer hover:text-text-high">Privacy Policy</span>
              <span className="cursor-pointer hover:text-text-high">Cookies</span>
            </div>
            <span>© 2026 Mina Labs, Inc.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
