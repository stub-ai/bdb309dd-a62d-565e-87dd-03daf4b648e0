import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

let visitorCount = 0;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.error('Supabase client could not be created due to missing environment variables.');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ count: number }>
) {
  visitorCount++;
  
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('visitors')
        .update({ count: visitorCount })
        .eq('id', 1)

      if (error) throw error

      if (data) visitorCount = data[0].count;
    } catch (error) {
      console.error('Error updating visitor count:', error);
    }
  }

  res.status(200).json({ count: visitorCount });
}