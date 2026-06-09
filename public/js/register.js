
async function loginUser() {
    try {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return;
    }
    const response = await GenericApiData('/api/login', 'POST', {
        username: username,
        password: password
    })
    console.log(response);
    if (response.error) {
        alert(response.message);
        return;
    }
    redirectPage('portal');
    } catch (error) {
        console.error(error);
    }
}

function createUser() {
    if (!validateForm()) {
        return;
    }
    const response = GenericApiData('/api/register', 'POST', {
        rol: document.getElementById('rol').value,
        username: document.getElementById('username').value,
        dni: document.getElementById('dni').value,
        socialwork: document.getElementById('socialwork').value,
        password: document.getElementById('password').value
    })

    if (response.error) {
        alert(response.message);
        return;
    }
    redirectPage('portal');
}        

function createProfesional() {
    if (!validateProfesional()) {
        return;
    }
    const response = GenericApiData('/api/profesional', 'POST', {
        nombre: document.getElementById('nombre').value,
        especialidad: document.getElementById('especialidad').value,
        descripcion: document.getElementById('descripcion').value,
    })

    if (response.error) {
        alert(response.message);
        return;
    }
    redirectPage('profesional');
}        
function createTurno() {
    if (!validateTurno()) {
        return;
    }
    const response = GenericApiData('/api/turno', 'POST', {
        profesional: document.getElementById('profesional').value,
        especialidad: document.getElementById('especialidad').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        paciente: document.getElementById('paciente').value
    })

    if (response.error) {
        alert(response.message);
        return;
    }
    redirectPage('turno');
}