// If else
let edad;
edad = 19;

if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

// Operador ternario: es la simplificacion de un if else en una sola linea de codigo.

let eresMayor = edad >= 18;

// Switch

let dia = 51;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("El dia no existe");
    break;
}
