const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const goToRegister = document.getElementById('go-to-register');
const goToLogin = document.getElementById('go-to-login');
const registerContainer = document.getElementById('register-container');

// Ejemplo de un usuario registrado 
const usuarioRegistrado = {
    email: 'e1312105503@live.uleam.edu.ec',
    password: '12345678' 
};

// Alternar entre formularios
goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    formLogin.style.display = 'none';
    registerContainer.style.display = 'block';
});

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerContainer.style.display = 'none';
    formLogin.style.display = 'block';
});

// Validar el formulario de registro
formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-password-confirm').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }
    alert('Registro exitoso');
    formRegister.reset();
});

// Validar el formulario de login
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    // Validar las credenciales
    if (loginEmail === usuarioRegistrado.email && loginPassword === usuarioRegistrado.password) {

        // Redirigir a la página
        window.location.href = 'html/student.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }

    formLogin.reset();
});
