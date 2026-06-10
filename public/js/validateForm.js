function validateUser() {
    const username = document.getElementById('username').value;
    const dni = document.getElementById('dni').value;
    const socialwork = document.getElementById('socialwork').value;
    const password = document.getElementById('password').value;
    if (username === '' || dni === '' || socialwork === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }
    return true;
}

function validateProfesional() {
    const nombre = document.getElementById('nombre').value;
    const especialidad = document.getElementById('especialidad').value;
    const descripcion = document.getElementById('descripcion').value;
    if (nombre === '' || especialidad === '' || descripcion === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }
    return true;
}

function validateTurno() {
    const profesional = document.getElementById('profesional').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    if (profesional === '' || fecha === '' || hora === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }
    return true;
}

function validateForm(type) {
    if (type === 'user') return validateUser();
    if (type === 'profesional') return validateProfesional();
    if (type === 'turno') return validateTurno();
}