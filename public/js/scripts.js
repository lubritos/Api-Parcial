function GenericApiData(url, type, data) {
    return fetch(url, {
        method: type,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}

function redirectToRegister() {
    window.location.href = '/register';
}

function redirectToProduct() {
    window.location.href = '/product';
}