/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   
   // 1 - Dividimos el nombre (que es un string) en un array de subcadenas con el método split("")
   let letrasSeparadas = nombre.split("");
   // 2 - Tomamos el elemeto en la posicion 0 del array "letrasSeparadas" y lo convertimos en en letra mayuscula con el metodo .toUpperCase()
   let primeraLetraMayuscula = letrasSeparadas[0].toUpperCase();
   // 3- Eliminamos la primera letra del array "letrasSeparadas" con el metodo .shift()
   letrasSeparadas.shift();
   // 4- agregamos "primeraLetraMayuscula" al array "letrasSeparadas" con metodo .unshift()
   letrasSeparadas.unshift(primeraLetraMayuscula);
   // 5 - Unimos todos los elementos del arreglo "letrasSeparadas"  de nuevo en una cadena o string
   let unirLetras = letrasSeparadas.join("");
   // 6- retornamos unirLetras
   return unirLetras;
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
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
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
