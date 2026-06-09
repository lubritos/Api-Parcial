function editProfesional(id, data) {
    console.log('id', id)
    const result = GenericApiData(`/api/profesional/${id}`, 'PUT', data);

    if (result) {
        redirectPage('profesional');
    }
}

function deleteProfesional(id) {
    console.log('id', id)
    const result = GenericApiData(`/api/profesional/${id}`, 'DELETE');

    if (result) {
        location.reload();
    }
}