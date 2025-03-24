// While

let contador = 0;

while (contador < 10) {
  console.log("while " + contador);
  contador++;
}

// Do while

do {
  console.log("Do while " + contador);
  contador++;
} while (contador < 10);

// Con while siempre va a comparar antes de ejecutar el codigo mientras con do while al menos se va a ejecutar una vez todo el codigo y desde la segundo si la condicion se cumple

//--------- FOR-----//

/* for (inicializacion de la variable; condicion; decremento o incremento)
{
  sentencia que ejecuta el for
  sentencia que ejecuta el for
  sentencia que ejecuta el for
}
  */
for (let i = 0; i < 10; i++) {
  console.log("for " + i);
}

let numeros = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

const michi = {
  nombre: "satanas",
  apellido: "el grande",
  edad: 2,
};

//-------- FOR IN -----//
/* el for in solo me permite recorrer 
  propiedades de un objeto
*/

for (const propiedad in michi) {
  console.log(propiedad, michi[propiedad]);
}

//------ FOR OF ------//
/* permite recorrer todos los elementos
  de cualquier objeto que sea iterable en JS
*/

for (const elemento of numeros) {
  console.log(elemento);
}
