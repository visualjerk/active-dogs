import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mstepdozqbuywwiffixm.supabase.co'
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY
if (!supabaseKey) {
  throw 'Required environment variable "VUE_APP_SUPABASE_KEY" not found.'
}
export const supabase = createClient(supabaseUrl, supabaseKey)
