function editProfesional(id, data) {
    console.log('id', id)
    const result = GenericApiData(`/api/profesional/${id}`, 'PUT', data);

    if (result) {
        redirectPage('profesional');
    }
}

function editTurno(id, data) {
    console.log('id', id)
    const result = GenericApiData(`/api/turno/${id}`, 'PUT', data);

    if (result) {
        redirectPage('turno');
    }
}

function deleteProfesional(id) {
    console.log('id', id)
    const result = GenericApiData(`/api/profesional/${id}`, 'DELETE');

    if (result) {
        location.reload();
    }
}

function deleteTurno(id) {
    console.log('id', id)
    const result = GenericApiData(`/api/turno/${id}`, 'DELETE');

    if (result) {
        location.reload();
    }
}
