loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset pesan error
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    // Cek username dan password
    if(username.value === 'fernando' && password.value === '123') {
        alert('Login berhasil!');
        // window.location.href = 'welcome.html'; -- Menghapus bagian ini
    } else {
        if(username.value !== 'fernando') {
            usernameError.textContent = 'Username salah!';
            usernameError.style.display = 'block';
        }
        if(password.value !== '123') {
            passwordError.textContent = 'Password salah!';
            passwordError.style.display = 'block';
        }
    }
});