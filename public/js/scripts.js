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

function redirectPage(page) {
    window.location.href = '/' + page;
}

function selectProfesional() {
    try {
        let html = ''
        GenericApiData('/api/profesional', 'GET').then((data) => {
            const elementHtml = document.getElementById('informacion');
            console.log('data', data)
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
        console.log(error);
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
            console.log('data', data)
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
                            onclick="javascript: deleteProfesional('${id}')" 
                            class="fa-solid fa-trash mr-2 text-sm cursor-pointer text-red-500"></i>
                        </td>
                    </tr>`;
            });
            elementHtml.innerHTML = html
        });
    } catch (error) {
        console.log(error);
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
function listTurno() {
    try {
        let html = ''
        GenericApiData('/api/turno', 'GET').then(async (data) => {
            const elementHtml = document.getElementById('informacion');
            console.log('data', data)
            if (!data.length) return
            for(let element of data){
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
                            onclick="javascript: deleteTurno('${id}')" 
                            class="fa-solid fa-trash mr-2 text-sm cursor-pointer text-red-500"></i>
                        </td>
                    </tr>`;
            }
            elementHtml.innerHTML = html
        });
    } catch (error) {
        console.log(error);
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
function showAdmin() {

}