import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function scrapeAndSync() {
  console.log("Starting daily news sync...");
  
  try {
    const dataPath = path.join(__dirname, 'scraped_data.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const sampleStories = JSON.parse(rawData);

    for (const story of sampleStories) {
      const { data, error } = await supabase
        .from('stories')
        .upsert(story, { onConflict: 'slug' });
      
      if (error) console.error(`Error syncing ${story.slug}:`, error);
      else console.log(`Synced: ${story.title}`);
    }

    // Cleanup old stories logic
    const { error: cleanupError } = await supabase.rpc('delete_old_stories');
    if (cleanupError) console.error("Error during cleanup:", cleanupError);
    
    console.log("Daily sync complete.");
  } catch (err) {
    console.error("Failed to run sync:", err);
  }
}

scrapeAndSync();
