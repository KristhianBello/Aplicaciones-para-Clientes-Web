// Referencias a los formularios y campos
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const formSolicitarTutoria = document.getElementById('form-solicitar-tutoria');
const tutoriasLista = document.getElementById('tutorias-lista');
const confirmadasLista = document.getElementById('confirmadas-lista');

// Simular una base de datos
let tutoriasSolicitadas = [];
let tutoriasConfirmadas = [];

// Evento para manejar la solicitud de tutoría
if (formSolicitarTutoria) {
    formSolicitarTutoria.addEventListener('submit', (e) => {
        e.preventDefault();
        const tema = document.getElementById('tema').value;
        const fecha = document.getElementById('fecha').value;

        // Agregar la nueva tutoría a la lista
        tutoriasSolicitadas.push({ tema, fecha });
        mostrarTutorias();
        formSolicitarTutoria.reset();
    });
}

// Función para mostrar las tutorías solicitadas
function mostrarTutorias() {
    tutoriasLista.innerHTML = '';
    tutoriasSolicitadas.forEach((tutoria, index) => {
        const li = document.createElement('li');
        li.textContent = `Tema: ${tutoria.tema}, Fecha: ${tutoria.fecha}`;
        
        // Botón para eliminar la tutoría
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.classList.add('eliminar-button');
        eliminarButton.addEventListener('click', () => {
            eliminarTutoria(index);
        });

        li.appendChild(eliminarButton);
        tutoriasLista.appendChild(li);
    });
}

// Función para eliminar una tutoría
function eliminarTutoria(index) {
    tutoriasSolicitadas.splice(index, 1);
    mostrarTutorias();
}

// Confirmar una tutoría (simulando la confirmación de un tutor)
function confirmarTutoria(index) {
    const tutoria = tutoriasSolicitadas[index];
    if (tutoria) {
        tutoriasConfirmadas.push(tutoria);
        tutoriasSolicitadas.splice(index, 1);
        mostrarTutorias();
        mostrarConfirmadas();
    }
}

// Función para mostrar las tutorías confirmadas
function mostrarConfirmadas() {
    confirmadasLista.innerHTML = '';
    tutoriasConfirmadas.forEach((tutoria) => {
        const li = document.createElement('li');
        li.textContent = `Tema: ${tutoria.tema}, Fecha: ${tutoria.fecha}`;
        confirmadasLista.appendChild(li);
    });
}

// Manejar el cierre de sesión
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        alert('Has cerrado sesión.');
        window.location.href = 'login.html'; // Redirigir al login
    });
}

confirmarButton.addEventListener('click', () => {
    if (tutoriasSolicitadas.length > 0) {
        confirmarTutoria(0); // Confirmar la primera tutoría como ejemplo
    } else {
        alert('No hay tutorías para confirmar');
    }
});
document.body.appendChild(confirmarButton);
