// Referencia a la tabla
const tutoriasTableBody = document.querySelector('#tutorias-table tbody');

// Cargar solicitudes desde localStorage o utilizar valores predeterminados si no existen
let solicitudesTutorias = JSON.parse(localStorage.getItem('solicitudesTutorias')) || [
    { id: 1, estudiante: 'Juan Pérez', fecha: '2024-10-15', estado: 'Pendiente' },
    { id: 2, estudiante: 'María Gómez', fecha: '2024-10-16', estado: 'Pendiente' }
];

// Función para guardar las solicitudes en localStorage
function guardarTutorias() {
    localStorage.setItem('solicitudesTutorias', JSON.stringify(solicitudesTutorias));
}

// Función para mostrar las tutorías en la tabla
function cargarTutorias() {
    tutoriasTableBody.innerHTML = '';
    solicitudesTutorias.forEach(solicitud => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${solicitud.estudiante}</td>
            <td>${solicitud.fecha}</td>
            <td>${solicitud.estado}</td>
            <td>
                <button onclick="aceptarTutoria(${solicitud.id})">Aceptar</button>
                <button onclick="cancelarTutoria(${solicitud.id})">Cancelar</button>
                <button onclick="toggleReasignarInput(this)">Reasignar</button>
                <input type="datetime-local" class="reasignar-input" style="display:none;" onchange="reasignarTutoria(this, ${solicitud.id})">
            </td>
        `;
        tutoriasTableBody.appendChild(row);
    });
}

// Funciones para las acciones del docente
function aceptarTutoria(id) {
    actualizarEstadoTutoria(id, 'Aceptada');
}

function cancelarTutoria(id) {
    actualizarEstadoTutoria(id, 'Cancelada');
}

function reasignarTutoria(input, id) {
    const nuevaFechaHora = input.value;
    if (nuevaFechaHora) {
        solicitudesTutorias = solicitudesTutorias.map(solicitud => 
            solicitud.id === id ? { ...solicitud, fecha: nuevaFechaHora, estado: 'Reasignada' } : solicitud
        );
        cargarTutorias();
        guardarTutorias();
        alert(`Tutoría reasignada a: ${nuevaFechaHora}`);
        input.style.display = 'none'; 
        input.value = ''; 
    }
}

// Actualizar el estado de la tutoría y guardar los cambios
function actualizarEstadoTutoria(id, nuevoEstado) {
    solicitudesTutorias = solicitudesTutorias.map(solicitud => 
        solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
    );
    cargarTutorias();
    guardarTutorias();
    alert('Tutoría ' + nuevoEstado);
}

// Cargar las tutorías al inicio
cargarTutorias();

// Función para cerrar sesión
function cerrarSesion() {
    
    window.location.href = "login.html"; 
}
