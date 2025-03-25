let valor1 //declarar
let operacion
function uno(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+1
  
}
function dos(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+2
  
}


function tres(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+3
  
}
function cinco(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+5
  
}
function seis(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+6
  
}
function siete(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+7
  
}
function ocho(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+8
  
}
function nueve(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+9
  
}
function cero(){
    valor=document.getElementById("pantalla").value
    if(valor===""){
        valor=0
    }

    document.getElementById('pantalla').value=10*(parseInt(valor))+0
  
}
function suma(){
    valor1=document.getElementById('pantalla').value
    operacion="suma"
    document.getElementById('pantalla').value=0
}
function resta(){
    valor1=document.getElementById('pantalla').value
    operacion="resta"
    document.getElementById('pantalla').value=0
}
function multiplicacion(){
    valor1=document.getElementById('pantalla').value
    operacion="multiplicacion"
    document.getElementById('pantalla').value=0
}
function division(){
    valor1=document.getElementById('pantalla').value
    operacion="division"
    document.getElementById('pantalla').value=0
}
function igual(){
    if (operacion== 'suma'){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)+parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value
        Swal.fire({
            title: "Te felicito has resuelto el problema",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(61, 247, 123, 0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
        
     

    }
    else if (operacion== 'resta'){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)-parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tu resta a finalizado con exsito soldado",
            showConfirmButton: false,
            timer: 1500
          });
 
    }
    else if(operacion=="multiplicacion"){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)*parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value  
        Swal.fire({
            title: "¡ Cada vez sigues mejorando🫵!",
            icon: "success",
            draggable: true
          });
       
    }
    else if(operacion=="division"){
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)/parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value 
        Swal.fire({
            title: "Te felicito has resuelto el problema",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(61, 247, 123, 0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
       
    }
}
 