// src/supabase.js
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://otfrmgwfyxrpfseysyjz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZnJtZ3dmeXhycGZzZXlzeWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NTk1MjksImV4cCI6MjA2NDEzNTUyOX0.PG6B7hPNbG2QCWU8CmsAs3Oq8Op5e5gO5zWpkLYMIUg';
export const supabase = createClient(supabaseUrl, supabaseKey);