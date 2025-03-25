let productos = [];
window.onload = cargarDesdeLocalStorage;

function cargarProducto() {
    let codigo = document.getElementById('codigo').value;
    let producto = document.getElementById('producto').value;
    let marca = document.getElementById('marca').value;
    let precio = document.getElementById('precio').value;
    let fecha = document.getElementById('fecha').value;

    if (codigo === '' || producto === '' || marca === '' || precio === '' || fecha === '') {
        alert("Debe llenar todos los campos");
        return;
    }

    productos.push([codigo, producto, marca, precio, fecha]);
    guardarEnLocalStorage();
    limpiarFormulario();
    mostrarProducto();
}

function mostrarProducto() {
    let tabla = document.getElementById('productos');
    tabla.innerHTML = `
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Marca</th>
        <th>Precio</th>
        <th>Fecha</th>
    </tr>`;

    productos.forEach((s) => {
        let fila = `
        <tr>
            <td>${s[0]}</td>
            <td>${s[1]}</td>
            <td>${s[2]}</td>
            <td>${s[3]}</td>
            <td>${s[4]}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

function buscarProducto() {
    let busquedaId = document.getElementById('codigo').value;
    if (busquedaId === '') {
        alert("Debe ingresar el código");
        return;
    }

    let encontrado = productos.find(est => est[0] === busquedaId);
    if (encontrado) {
        document.getElementById('codigo').value = encontrado[0];
        document.getElementById('producto').value = encontrado[1];
        document.getElementById('marca').value = encontrado[2];
        document.getElementById('precio').value = encontrado[3];
        document.getElementById('fecha').value = encontrado[4];
    } else {
        alert("Producto no encontrado");
    }
}

function actualizarProducto() {
    let codigo = document.getElementById('codigo').value;
    let productoN = document.getElementById('producto').value;
    let marcaN = document.getElementById('marca').value;
    let precioN = document.getElementById('precio').value;
    let fechaN = document.getElementById('fecha').value;

    if (codigo === '' || productoN === '' || marcaN === '' || precioN === '' || fechaN === '') {
        alert('Debe llenar todos los campos');
        return;
    }

    let indice = productos.findIndex(est => est[0] === codigo);
    if (indice !== -1) {
        productos[indice] = [codigo, productoN, marcaN, precioN, fechaN];
        guardarEnLocalStorage();
        limpiarFormulario();
        mostrarProducto();
        alert('Producto actualizado correctamente');
    } else {
        alert('Producto no encontrado');
    }
}

function eliminarProducto() {
    let codigo = document.getElementById('codigo').value;
    if (codigo === '') {
        alert('Debe ingresar el código');
        return;
    }

    let indice = productos.findIndex(est => est[0] === codigo);
    if (indice !== -1) {
        productos.splice(indice, 1);
        guardarEnLocalStorage();
        limpiarFormulario();
        mostrarProducto();
        alert('Producto eliminado correctamente');
    } else {
        alert('Producto no encontrado');
    }
}

function limpiarFormulario() {
    document.getElementById('codigo').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('fecha').value = '';
}

function guardarEnLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("productos");
    if (datosGuardados) {
        productos = JSON.parse(datosGuardados);
        mostrarProducto();
    }
}