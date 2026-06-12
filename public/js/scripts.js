function GenericApiData(url, type, data) {
    return fetch(url, {
        method: type,
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}

function redirectPage(page) {
    window.location.href = '/' + page;
}

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
        if (response.error) {
            alert(response.message);
            return;
        }
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.id);
        sessionStorage.setItem('rol', response.rol);
        redirectPage('portal');
    } catch (error) {
        console.error(error);
    }
}

function logoutUser() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('rol');
    redirectPage('');
}

function getUserId() {
    return sessionStorage.getItem('userId');
}

function getToken() {
    return sessionStorage.getItem('token');
}

function getRol() {
    return sessionStorage.getItem('rol');
}