// Coloque a URL do seu projeto Supabase aqui (deve começar com https://)
const supabaseUrl = 'https://zsifctwtgqrpmdutgnuo.supabase.co';

// Coloque a sua chave pública (anon key) aqui.
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzaWZjdHd0Z3FycG1kdXRnbnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMjQ2NzYsImV4cCI6MjEwNjkwMDY3Nn0.WUdmvzPEBTtm-ul3M_6jIxnXAcMKrGV8w7Tsmgfathk';

// Criamos a ferramenta principal do nosso app chamada 'clienteSupabase'.
// Usaremos ela em todos os outros arquivos para enviar e receber dados.
const clienteSupabase = window.supabase.createClient(supabaseUrl, supabaseKey);
