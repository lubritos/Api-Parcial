
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
    redirectToProduct();
    } catch (error) {
        console.error(error);
    }
}

function validateForm() {
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
    redirectToProduct();
}        
