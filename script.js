const dbUrl = 'https://vjruyeayykeveptvdsot.supabase.co';
const dbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnV5ZWF5eWtldmVwdHZkc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NDY3NTQsImV4cCI6MjA3MjQyMjc1NH0.hzFd4sNWD7zfCrsQhW0_aP-BVycXLA9w8z2nBL83XMM';
const db = supabase.createClient(dbUrl, dbKey);

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const icsUrl = document.getElementById('icsUrl').value.trim();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                ics_url: icsUrl
            }
        }
    });
});