import { createClient } from '@supabase/supabase-js'


const SUPABASE_URL = 'https://verpgyanoevtaimxscfd.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcnBneWFub2V2dGFpbXhzY2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNDI1NDgsImV4cCI6MjAxMzcxODU0OH0.6-JJdOpTWty-S8pCjykg4tfCyNmufEi8uK0aguovcg0'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase;
