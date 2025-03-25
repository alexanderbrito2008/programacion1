function calcular(){
  let modo;
  let virtual=false
  let presencial=false
  let nombre=document.getElementById("nombre").value;
  if (!nombre){
      mensaje("Nombre")
  }
  let materia=document.getElementById("materia").value;
  if (!materia){
      mensaje("Materia")
  }
  virtual=document.querySelector("#virtual").checked;
  presencial=document.querySelector("#presencial").checked;
      if (!virtual && !presencial){
      mensaje("Modalidad Educativa");
  }
  if(virtual){
      modo="virtual"
  }
  if(presencial){
      modo="presencial";
  }
  let nota1=document.getElementById("nota1").value
  let nota2=document.getElementById("nota2").value
  let nota3=document.getElementById("nota3").value
  let nota4=document.getElementById("nota4").value
  let promedio=(parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4))/4
  let resultado;
  if (promedio<=40){
      resultado="Reprobado"
  } else if (promedio<70){
      resultado="Debe Mejorar"
  } else {
      resultado="Aprobado"
  }
  document.getElementById("promedio").value=promedio + "  "+ resultado

}
function mensaje(campo){
Swal.fire({
icon: "error",
title: "Campos Obligatorios",
text: "el campo"+campo+"esta vacio",
});
}