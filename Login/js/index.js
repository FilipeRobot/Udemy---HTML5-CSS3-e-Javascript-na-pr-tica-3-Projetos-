function showPassword() {
    const passwordVisible = document.getElementById('password-visible');
    const passwordHidden = document.getElementById('password-hidden');
    const fieldPassword = document.getElementById('field-password');

    if (passwordVisible.style.display === 'none') {
        passwordVisible.style.display = 'block';
        passwordHidden.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        passwordVisible.style.display = 'none';
        passwordHidden.style.display = 'block';
        fieldPassword.type = 'password';
    }
}

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Logado');
})