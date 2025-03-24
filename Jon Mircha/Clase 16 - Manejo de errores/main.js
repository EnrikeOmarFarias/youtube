try {
  console.log("En el try se agrega el codigo a evaluar");
} catch (error) {
  console.log("captura cualquier error surgido a lanzado en el try");
} finally {
  console.log("se ejecutara siempre al final de un bloque try-catch");
}

try {
  let numero = "k";
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}
