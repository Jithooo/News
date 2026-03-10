"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import StorySidebar from "@/components/StorySidebar";
import KeyTakeaways from "@/components/KeyTakeaways";
import MediaStack from "@/components/MediaStack";
import QuoteCard from "@/components/QuoteCard";
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
      
      <main className="pt-24 pb-20 px-6 sm:px-12 max-w-[1400px] mx-auto flex gap-12 lg:gap-16">
        {/* Main Content Column */}
        <div className="flex-1 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-text-low hover:text-text-high font-bold mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold leading-[1.1] text-text-high mb-8">
                {story.title}
              </h1>
              <p className="text-xl text-text-low font-medium leading-relaxed">
                {story.summary}
              </p>
            </div>
            
            <div className="w-full md:w-[380px] lg:w-[440px] shrink-0">
               <MediaStack images={story.content.media_stack || [story.image_url]} />
            </div>
          </div>

          <div className="border-t border-black/5 pt-12">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-brand" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Multi-Source Summary</h2>
            </div>

            {/* Render full paragraphs if available */}
            {story.content.multi_source_summary ? (
              <div className="space-y-8 mb-12">
                {story.content.multi_source_summary.map((para, i) => (
                  <p key={i} className="text-xl lg:text-2xl font-serif leading-relaxed text-text-high">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <KeyTakeaways items={story.content.key_takeaways} />
            )}

            {/* Render Takeaways as secondary if paragraphs exist */}
            {story.content.multi_source_summary && (
              <div className="mt-12 bg-black/[0.02] p-8 rounded-[40px] border border-black/5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-text-low mb-6">Key Takeaways</h3>
                <KeyTakeaways items={story.content.key_takeaways} />
              </div>
            )}

            {/* Why it matters */}
            {story.content.why_it_matters && (
              <div className="mt-20 p-10 rounded-[48px] bg-brand/5 border border-brand/10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand mb-6">Why it matters</h3>
                <p className="text-2xl lg:text-3xl font-serif leading-tight text-text-high">
                  {story.content.why_it_matters}
                </p>
              </div>
            )}

            {/* Quotes Grid */}
            {story.content.quotes && (
              <div className="mt-24">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                    <span className="text-xs font-bold">{story.content.quotes.length}</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Expert Analysis & Quotes</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {story.content.quotes.map((q, i) => (
                    <QuoteCard key={i} quote={q.text} author={q.author} context={q.context} />
                  ))}
                </div>
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
