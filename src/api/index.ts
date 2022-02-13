import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mstepdozqbuywwiffixm.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdGVwZG96cWJ1eXd3aWZmaXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ3NzQxMTMsImV4cCI6MTk2MDM1MDExM30.hKjsQP_TjCVNDyrmzmA7pA0e8zbPIu7MDuqnawukllY'
export const supabase = createClient(supabaseUrl, supabaseKey)
