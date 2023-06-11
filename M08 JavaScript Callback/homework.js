/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   
   // Opcion 1 de respuesta
   // 1 - Dividimos el nombre (que es un string) en un array de subcadenas con el método split("")
   // let letrasSeparadas = nombre.split("");
   // 2 - Tomamos el elemeto en la posicion 0 del array "letrasSeparadas" y lo convertimos en en letra mayuscula con el metodo .toUpperCase()
   // let primeraLetraMayuscula = letrasSeparadas[0].toUpperCase();
   // 3- Eliminamos la primera letra del array "letrasSeparadas" con el metodo .shift()
   // letrasSeparadas.shift();
   // 4- agregamos "primeraLetraMayuscula" al array "letrasSeparadas" con metodo .unshift()
   // letrasSeparadas.unshift(primeraLetraMayuscula);
   // 5 - Unimos todos los elementos del arreglo "letrasSeparadas"  de nuevo en una cadena o string
   // let unirLetras = letrasSeparadas.join("");
   // 6- retornamos unirLetras
   // return unirLetras;

   // Opcion 2 de respuesta
   // El metodo .charAt() toma u string y entre el parantesis debeos indicarle la posición o indice del caracter que queremos modificar
   // El metodo slice() divide un string desde la posicion o indice que le pasemos entre los parentesis
   // return nombre.charAt(0).toUpperCase() + nombre.slice(1);

   // Opcion 3 de respuesta
   // El metodo .substring() devuelve una subcadena de un string, divide el string desde la posicion o indice que le pasemos entre los parentesis
   // return nombre[0].toUpperCase() + nombre.substring(1);

   // Opcion 4 de respuesta
   let primeraMayuscula = "";
   for (let i = 0; i < nombre.length; i++) {
      if (i === 0) {
         primeraMayuscula += nombre[i].toUpperCase();
      } else {
         primeraMayuscula += nombre[i]
      };
   }
   return primeraMayuscula;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   // Opcion 1 de respuesta
   // let suma = arrayOfNumbers.reduce((acumulador, elemento) => acumulador + elemento, 0);
   // cb(suma);

   // Opcion 2 de respuesta
   let resultado = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++) {
      resultado += arrayOfNumbers[i];
   }
   cb(resultado);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   // Opcion 1 de respuesta
   array.forEach(cb);

   // Opcion 2 de respuesta
   // for (let i = 0; i < array.length; i++) {
   //    cb(array[i]);
   // }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let nuevoArray = array.map(elemento => cb(elemento));
   return nuevoArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoArray = arrayOfStrings.filter(elemento => elemento[0] === 'a');
   return nuevoArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
