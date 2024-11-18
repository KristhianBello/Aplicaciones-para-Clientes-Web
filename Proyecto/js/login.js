// Referencias a los formularios y campos
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const goToRegister = document.getElementById('go-to-register');
const goToLogin = document.getElementById('go-to-login');
const registerContainer = document.getElementById('register-container');

// Simular un usuario registrado 
const usuarioRegistrado = {
    email: 'e1312105503@live.uleam.edu.ec',
    password: '12345678'
};

const docenteRegistrado = {
    email: 'p1301732150@live.uleam.edu.ec',
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

        // Redirigir a la página de solicitar tutoría
        window.location.href = "/Proyecto/html/student.html";


    } else {
        alert('Correo o contraseña incorrectos.');
    }

    formLogin.reset();
});

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Verifica la primera letra del correo electrónico
    const primeraLetra = email.charAt(0).toLowerCase();

    if (primeraLetra === 'p') {
        // Redirigir al menú del docente
        window.location.href = "/Proyecto/html/teacher.html"; // Cambia a la ruta correcta
    } else if (primeraLetra === 'e') {
        // Redirigir al menú del estudiante
        window.location.href = "/Proyecto/html/student.html"; // Cambia a la ruta correcta
    } else {
        // Mensaje de error si el correo no es válido
        alert('Correo no válido. Por favor, ingresa un correo que comience con "p" o "e".');
    }
    
    formLogin.reset();
});
