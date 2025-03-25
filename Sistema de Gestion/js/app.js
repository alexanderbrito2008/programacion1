document.addEventListener("DOMContentLoaded", () => {
    cargarInventario();

    document.getElementById("form-productos").addEventListener("submit", agregarProducto);
    document.getElementById("form-entradas").addEventListener("submit", agregarEntrada);
    document.getElementById("form-salidas").addEventListener("submit", agregarSalida);
});

let inventario = JSON.parse(localStorage.getItem("inventario")) || [];
let entradas = JSON.parse(localStorage.getItem("entradas")) || [];
let salidas = JSON.parse(localStorage.getItem("salidas")) || [];

function agregarProducto(e) {
    e.preventDefault();
    let producto = document.getElementById("producto").value;
    let codigo = document.getElementById("codigo").value;
    let stock = 0;

    if (inventario.some(p => p.codigo == codigo)) {
        alert("El codigo ya existe");
        return;
    }
    inventario.push({ producto, codigo, stock });
    guardarInventario();
    actualizarTablas();
    e.target.reset();
}
function agregarEntrada(e) {
    e.preventDefault();
    let codigo = document.getElementById("codigoEntrada").value;
    let cantidad = parseInt(document.getElementById("cantidadEntrada").value);
    let producto = inventario.find(p => p.codigo == codigo);
    if (producto) {
        producto.stock += cantidad;
        entradas.push({ codigo, cantidad });
        guardarInventario();
        actualizarTablas();
    } else {
        alert("Este Codigo no existe");
    }
    e.target.reset();
}

function agregarSalida(e) {
    e.preventDefault();
    let codigo = document.getElementById("codigoSalida").value;
    let cantidad = parseInt(document.getElementById("cantidadSalida").value);
    let producto = inventario.find(p => p.codigo == codigo);
    if (producto) {
        if (producto.stock >= cantidad) {
            producto.stock -= cantidad;
            salidas.push({ codigo, cantidad });
            guardarInventario();
            actualizarTablas();
        } else {
            alert("Stock insuficiente");
        }
    } else {
        alert("El código no existe");
    }
    e.target.reset();
}

function guardarInventario() {
    localStorage.setItem("inventario", JSON.stringify(inventario));
    localStorage.setItem("entradas", JSON.stringify(entradas));
    localStorage.setItem("salidas", JSON.stringify(salidas));
}

function actualizarTablas() {
    let tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML = "";
    inventario.forEach(({ producto, codigo, stock }) => {
        tablaProductos.innerHTML += `
            <tr>
                <td>${producto}</td>
                <td>${codigo}</td>
                <td>${stock}</td>
            </tr>
        `;
    });
}

 function cargarInventario(){
    actualizarTablas();
}