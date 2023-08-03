import {createClient} from '@supabase/supabase-js'
//tuve un error para cargar desde el .env
export const client = createClient(
    'https://vokqmptgcbtvfhcqdweq.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZva3FtcHRnY2J0dmZoY3Fkd2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwMTExNjAsImV4cCI6MjAwNjU4NzE2MH0.fpMejlki0Xs73g-7IEviqxPa6mmN1WjZ4PJ7KMA1Efg'
)