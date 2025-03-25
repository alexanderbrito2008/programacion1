function agregarDatos(){
    //recolectar Informacion
    let nombre =prompt("Ingresa tu Nonbre")
    let edad =prompt("Ingresa tu edad")
    //apuntar a la tabla creada a traves de tu ID
    let tabla = document.getElementById('tablaPersonas')
    //crear una nueva fila (tr)
    let fila=""
       //asignar texto a las tablas
    fila+=`
    <tr><td>${nombre}</td><td>${edad}</td></td>`
    tabla.innerHTML+=fila;





}