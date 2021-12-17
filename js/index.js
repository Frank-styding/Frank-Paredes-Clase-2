let edad = prompt("Digite su edad");
edad = +edad;

if(edad > 0){
  if(edad >= 18){
    alert("Eres mayor de edad")
  }else{
    alert("Eres menor de edad")
  }
}else{
  alert("El edad no puede ser negativa")
}
