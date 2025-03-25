let estudiantes = [];
window.onload = cargarDesdeLocalStorage;
function cargarArreglo() {
    //arreglo es un tipo de variable donde podemos almacenar valores multiples en una misma Variable

    let nombre = document.getElementById('nombre').value
    let identidad = document.getElementById('identidad').value
    let edad = document.getElementById('edad').value
    let carrera = document.getElementById('carrera').value
    if (nombre === '' || identidad === '' || edad === '' || carrera === '') {

        alert("debe llenar todos los campos")
        return
    }
    estudiantes.push([nombre, identidad, edad, carrera])
    guardarEnLocalStorage();
    console.log(estudiantes)
    document.getElementById('nombre').value = ''
    document.getElementById('identidad').value = ''
    document.getElementById('edad').value = ''
    document.getElementById('carrera').value = ''
    mostrarEstudiantes()


    estudiantes.push([nombre, identidad, edad, carrera])
    console.log(estudiantes)
    document.getElementById('nombre').value = ''
    document.getElementById('identidad').value = ''
    document.getElementById('edad').value = ''
    document.getElementById('carrera').value = ''
    mostrarEstudiantes()

}

function mostrarEstudiantes() {
    let tabla = document.getElementById('estudiantes')
    tabla.innerHTML = `
    <tr>
            <th width="30%">Nombre</th>
            <th width="25%">Identidad</th>
            <th width="20%">Edad</th>
            <th width="25%">Carrera</th>
    </tr>`;
    estudiantes.forEach((s, index) => {
        let fila = `
        <tr>
         <td>${estudiante[0]}</td>
            <td>${estudiante[1]}</td>
            <td>${estudiante[2]}</td>
            <td>${estudiante[3]}</td>
        </tr>`;
        tabla.innerHTML += fila
    })

}
function buscarEstudiante() {
    let busquedaId = document.getElementById('identidad').value
    if (busquedaId === '') {
        alert("debe ingresar el numero de identidad");
        return;
    }
    let encontrado = estudiantes.find(est => est[1] === busquedaId)
    if (encontrado) {
        document.getElementById('nombre').value = encontrado[0]
        document.getElementById('edad').value = encontrado[2]
        document.getElementById('carrera').value = encontrado[3]
    } else {
        alert("estudiante no encontrado")
    }
}
function actualizarEstudiante() {
    let nombreN = document.getElementById('nombre').value;
    let identidad = document.getElementById('identidad').value;
    let edadN = document.getElementById('edad').value;
    let carreraN = document.getElementById('carrera').value;
    if (identidad === '' || nombre === '' || edad === '' || carrera === '') {
        alert('Debe llenar todos los Campos');
        return;
    }
    let indice = estudiantes.findIndex(est => est[1] === identidad);
    if (indice !== -1) {
        estudiantes[indice] = [nombreN, identidad, edadN, carreraN];
        guardarEnLocalStorage();
        document.getElementById('nombre').value = ''
        document.getElementById('identidad').value = ''
        document.getElementById('edad').value = ''
        document.getElementById('carrera').value = ''
        mostrarEstudiantes()
        alert('Es estudiante a sido actualizado correctamente');
    } else {
        alert('Estudiante no encontrado')
    }
}
function eliminarEstudiante() {
    let identidad = document.getElementById('identidad').value;
    if (identidad === '') {
        alert('Debe llenar el campo Identidad');
        return;
    }
    let indice = estudiantes.findIndex(est => est[1] === identidad);
    if (indice !== -1) {
        estudiantes.splice(indice, 1);
        document.getElementById('nombre').value = ''
        document.getElementById('identidad').value = ''
        document.getElementById('edad').value = ''
        document.getElementById('carrera').value = ''
        mostrarEstudiantes()
        alert('Es estudiante a sido borrado del registro correctamente');
    } else {
        alert('Estudiante no encontrado')
    }

}
function guardarEnLocalStorage() {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}
function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("estudiantes");
    if (datosGuardados) {
        estudiantes = JSON.parse(datosGuardados);
        mostrarEstudiantes();
    }
}