
function selectProfesional() {
    try {
        let html = ''
        GenericApiData('/api/profesional', 'GET').then((data) => {
            const elementHtml = document.getElementById('informacion');
            if (!data.length) return
            data.forEach(element => {
                const id = element['_id']
                html +=`
                    <tr>
                        <td class="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.nombre}</td>
                        <td class="border-b border-gray-100 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.especialidad}</td>
                        <td class="border-b border-gray-100 p-4 pr-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.descripcion}</td>
                        
                    </tr>`;
            });
            elementHtml.innerHTML = html
        });
    } catch (error) {
        const elementHtml = document.getElementById('informacion');
        elementHtml.innerHTML = '';
        if (!data) {
            elementHtml.appendChild(`
                <tr>
                    <td colspan="4">
                        <p>
                            No se encontraron profesionales
                        </p>
                    </td>
                </tr>
            `);
            return
        }
    }
}

function listProfesional() {
    try {
        let html = ''
        GenericApiData('/api/profesional', 'GET').then((data) => {
            const elementHtml = document.getElementById('informacion');
            if (!data.length) return
            data.forEach(element => {
                const id = element['_id']
                html +=`
                    <tr>
                        <td class="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.nombre}</td>
                        <td class="border-b border-gray-100 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.especialidad}</td>
                        <td class="border-b border-gray-100 p-4 pr-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.descripcion}</td>
                        <td class="text-center ">
                            <i
                            onclick="javascript: redirectPage('profesional/${id}')" 
                            class="fa-solid fa-pen-to-square mr-2 text-sm cursor-pointer"></i>

                            <i
                            onclick="javascript: deleteItem('${id}', 'profesional')" 
                            class="fa-solid fa-trash mr-2 text-sm cursor-pointer text-red-500"></i>
                        </td>
                    </tr>`;
            });
            elementHtml.innerHTML = html
        });
    } catch (error) {
        const elementHtml = document.getElementById('informacion');
        elementHtml.innerHTML = '';
        if (!data) {
            elementHtml.innerHTML = `
                <tr>
                    <td colspan="4">
                        <p>
                            No se encontraron profesionales
                        </p>
                    </td>
                </tr>
            `;
            return
        }
    }
}

async function getDataProfesional(id) {
    return await GenericApiData(`/api/profesional/${id}`, 'GET')
}
function listTurno(filtro) {
    try {
        let html = ''
        GenericApiData('/api/turno', 'GET').then(async (data) => {
            const elementHtml = document.getElementById('informacion');
            if (!data.length) return
            const filterData = filtro ? data.filter(turno => {
                if (filtro.type === 'especialidad') return turno.especialidad === filtro.value
                return turno.profesional === filtro.value
            }) : data
            if (!filterData.length) {
                elementHtml.innerHTML = `
                    <tr class="py-4">
                        <td class="border-b border-gray-100 p-4 pl-8 text-gray-500 text-center dark:border-gray-700 dark:text-gray-400" colspan="4">
                            No hay turnos registrados
                        </td>
                    </tr>
                `;
                return
            }
            for(let element of filterData){
                const id = element['_id']
                const profesional = await getDataProfesional(element.profesional)
                html +=`
                    <tr>
                        <td class="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                            ${profesional.nombre}
                        </td>
                        <td class="border-b border-gray-100 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.especialidad}</td>
                        <td class="border-b border-gray-100 p-4 pr-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">${element.fecha} ${element.hora}</td>
                        <td class="text-center ">
                            <i
                            onclick="javascript: redirectPage('turno/${id}')" 
                            class="fa-solid fa-pen-to-square mr-2 text-sm cursor-pointer"></i>
    
                            <i
                            onclick="javascript: deleteItem('${id}', 'turno')" 
                            class="fa-solid fa-trash mr-2 text-sm cursor-pointer text-red-500"></i>
                        </td>
                    </tr>`;
            }
            elementHtml.innerHTML = html
        });
    } catch (error) {
        const elementHtml = document.getElementById('informacion');
        elementHtml.innerHTML = '';
        if (!data) {
            elementHtml.innerHTML = `
                <tr>
                    <td colspan="4">
                        <p>
                            No se encontraron turnos
                        </p>
                    </td>
                </tr>
            `;
            return
        }
    }
}

function createItem(config) {
    const { endpoint, data, redirect } = config;
    if (!validateForm(endpoint)) {
        return;
    }
    const response = GenericApiData(`/api/${endpoint}`, 'POST', data)

    if (response.error) {
        alert(response.message);
        return;
    }
    redirectPage(redirect);
}

function editItem(id, endpoint, data) {
    const result = GenericApiData(`/api/${endpoint}/${id}`, 'PUT', data);
    if (result) {
        redirectPage(endpoint);
    }
}

function deleteItem(id, endpoint) {
    const result = GenericApiData(`/api/${endpoint}/${id}`, 'DELETE');
    if (result) {
        location.reload();
    }
}

