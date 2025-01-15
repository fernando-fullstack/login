// Mendapatkan referensi elemen-elemen form
const loginForm = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Menambahkan event listener untuk form submit
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset pesan error
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    // Cek username dan password
    if(username.value === 'fernando' && password.value === '123') {
        alert('Login berhasil!');
        // Ganti URL di bawah ini dengan URL website Anda
        window.location.href = 'https://url-Kopi- Onthel.com'; // Ganti dengan URL website Anda
    } else {
        // Menampilkan pesan error jika username salah
        if(username.value !== 'fernando') {
            usernameError.textContent = 'Username salah!';
            usernameError.style.display = 'block';
        }
        // Menampilkan pesan error jika password salah
        if(password.value !== '123') {
            passwordError.textContent = 'Password salah!';
            passwordError.style.display = 'block';
        }
    }
});