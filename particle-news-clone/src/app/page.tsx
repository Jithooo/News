"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Subnav from "@/components/Subnav";
import NewsCard from "@/components/NewsCard";
import { useEffect, useState } from "react";

// In production, this would be a Supabase fetch
import MOCK_DATA from "../../scripts/scraped_data.json";

export default function Home() {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    // Mimic API fetch
    setStories(MOCK_DATA);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Header />
      <Sidebar />
      
      <main className="lg:ml-64 p-6 lg:p-12 max-w-7xl mx-auto">
        <Subnav />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <NewsCard 
              key={story.slug}
              slug={story.slug}
              title={story.title}
              summary={story.summary}
              image={story.image_url}
              count={story.article_count}
              time="JUST NOW"
              color={i === 0 ? "#450a0a" : i === 1 ? "#0f172a" : i === 2 ? "#1e3a8a" : "#111827"}
              className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
            />
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
