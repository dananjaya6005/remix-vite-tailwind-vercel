import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient(
    "https://pfcpiefhtaayktqkegvm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmY3BpZWZodGFheWt0cWtlZ3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MTM2NjQsImV4cCI6MjAyMTk4OTY2NH0.0I7OqVZTG7vGX9w4NJNe55zsqUv2HJRVqPB7fUtqD9Q"
  );


export async function getPosts() {
  let { data: posts, error } = await supabase
    .from('SadahamStore')
    .select('*')

  if (error) console.error('Error: ', error)
  else return posts
}
