function calcular() {
    const precios = {
        "Detergente_polvo": 40,
        "Detergente_liquido": 45,
        "Escobas": 60,
        "Trapeadores": 200,
        "Cepillos": 42,
        "Desinfectante_galon": 100,
        "Jabon_mano": 100,
        "Jabon_barra": 30,
        "Pastillas_baño": 25,
    
}
    const producto = document.getElementById('producto').value;

   
    const cantidad = parseFloat(document.getElementById('cantidad_entregada').value);

    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingrese una cantidad válida.");
        return;
    }

    const precio = precios[producto];


    const total = precio * cantidad;

    document.getElementById('producto_entregado').value = producto;
    document.getElementById('Total').value = total + " Lps";
}


function Registro_Nuevo() {

document.getElementById('nombre_encargado').value = '';
document.getElementById('nombre_empleado').value = '';
document.getElementById('producto_entregado').value = '';
document.getElementById('cantidad_entregada').value = '';
document.getElementById('fecha_entrega').value = '';
document.getElementById('Total').value = '';
}