"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import StorySidebar from "@/components/StorySidebar";
import KeyTakeaways from "@/components/KeyTakeaways";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Mock data fallback if DB is not ready
import MOCK_DATA from "../../../../scripts/scraped_data.json";

export default function StoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [story, setStory] = useState<any>(null);

  useEffect(() => {
    // In production, this would be a Supabase call
    const foundStory = MOCK_DATA.find((s) => s.slug === slug);
    setStory(foundStory);
  }, [slug]);

  if (!story) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Header minimal />
      
      <main className="pt-24 pb-20 px-6 sm:px-12 max-w-[1400px] mx-auto flex gap-16">
        {/* Main Content Column */}
        <div className="flex-1 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-text-low hover:text-text-high font-bold mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="flex-1">
              <h1 className="text-5xl font-serif font-bold leading-[1.1] text-text-high mb-6">
                {story.title}
              </h1>
              <p className="text-xl text-text-low font-medium">
                {story.summary}
              </p>
            </div>
            
            {story.image_url && (
              <div className="w-full md:w-[400px] shrink-0">
                <div className="relative group">
                   {/* Mimicking Media Stack visually */}
                  <div className="absolute inset-0 bg-black/5 rounded-3xl translate-x-4 translate-y-4 -rotate-3 transition-transform group-hover:rotate-0" />
                  <img 
                    src={story.image_url} 
                    alt={story.title} 
                    className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-xl ring-1 ring-black/5"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-black/5 pt-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-brand" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Multi-Source Summary</h2>
            </div>

            <KeyTakeaways items={story.content.key_takeaways} />

            {story.content.why_it_matters && (
              <div className="mt-16 p-8 rounded-[32px] bg-brand/5 border border-brand/10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand mb-4">Why it matters</h3>
                <p className="text-2xl font-serif leading-relaxed text-text-high">
                  {story.content.why_it_matters}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <StorySidebar sources={story.content.source_articles} />
      </main>
    </div>
  );
}
