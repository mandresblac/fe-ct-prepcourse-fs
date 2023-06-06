/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let nuevoArray = [];
   for (let i = 0; i < array.length; i++) {
      nuevoArray.push(array[i] + 1);
   }

   return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   
   // Opcion 1 de respuesta
   // array.push(elemento);
   // return array;

   // Opcion 2 de respuesta
   array[array.length] = elemento;
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.some( e => e === elemento);
   // No es con includes sino con some
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = resultadosTest.reduce((acumulador, elemento) => acumulador + elemento, 0 );
   let promedio = suma / resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   // Opcion 1 de respuesta
   return Math.max(...arrayOfNums);

   // Opcion 2 de respuesta
   //  let max = 0
   //  for (let i = 0; i < arrayOfNums.length; i++) {
   //    if (arrayOfNums[i] > max) max  = arrayOfNums[i];
   //  }
   //  return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   // Primero, se verifica si no se pasaron argumentos (arguments.length === 0). En ese caso, la función retorna 0, ya que no hay valores para multiplicar.
   if (arguments.length === 0) return 0;
   else if (arguments.length === 1) {
      // Luego, se verifica si se pasó un único argumento (arguments.length === 1). En ese caso, la función retorna ese único argumento (arguments[0]), ya que no es necesario realizar ninguna operación de multiplicación.
      return arguments[0];
   } else {
      // Si se pasaron más de un argumento, se utiliza un bucle for para recorrer todos los elementos de arguments. Se inicializa una variable producto en 1 y se actualiza multiplicando cada elemento del arguments al valor actual de producto.
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
      }

      // Finalmente, se retorna el valor de producto, que es el resultado de la multiplicación de todos los argumentos.
      return producto;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let mayoresA18 = array.filter(element => element > 18);
   return mayoresA18.length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
   else if (numeroDeDia >= 2 || numeroDeDia <= 6) return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let nuevoNumero = num.toString();
   return nuevoNumero.startsWith('9');
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   // Primero se verifica si el array está vacío (array.length === 0). En ese caso, se retorna true, ya que no hay elementos para comparar y se considera que son todos iguales.
   if (array.length === 0) {
      return true;
   }

   // Luego, se toma el primer elemento del array (array[0]) y se almacena en la variable primerElemento. Esto servirá como referencia para comparar con los demás elementos del array.
   var primerElemento = array[0];

   // se utiliza un bucle for para iterar sobre el array desde el segundo elemento (i = 1) hasta el último elemento (i < array.length). En cada iteración, se compara el elemento actual del array con primerElemento. Si algún elemento es diferente, se retorna false, indicando que no todos los elementos son iguales.
   for (var i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
         return false;
      }
   }

   // Si el bucle finaliza sin encontrar elementos diferentes, se retorna true, indicando que todos los elementos del array son iguales.
   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   // Se crea un nuevo arreglo llamado mesesPedidos para almacenar los meses encontrados.
   mesesDesordenados = [];

   // Se utiliza la función includes() dentro de la condicion del if para verificar si los meses "Enero", "Marzo" y "Noviembre" están presentes en el arreglo.
   if (
      array.includes("Enero") && 
      array.includes("Marzo") && 
      array.includes("Noviembre")
      ) {
         // Si todos los meses están presentes, se procede a recorrer el arreglo original utilizando el método forEach().
         // Dentro del bucle forEach(), se compara cada elemento (mes) con los meses "Enero", "Marzo" y "Noviembre". 
         array.forEach( mes => {
            if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
               // Si el elemento coincide con alguno de estos meses, se agrega al arreglo mesesPedidos mediante el método push().
               mesesDesordenados.push( mes );
            }
         });      
   } else {
      // Finalmente, si no se encuentran todos los meses pedidos en el arreglo original, se retorna el string "No se encontraron los meses pedidos".
      return "No se encontraron los meses pedidos"
   }

   // De lo contrario, se retorna el arreglo mesesPedidos que contiene los meses encontrados.
   return mesesDesordenados;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let resultado = [];
   for (let i = 0; i <= 10; i++){
      //console.log(`6 x ${i} = ${6 * i}`);
      //console.log(6 * i);
      resultado.push(6 * i);
   };

   return resultado;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter(element => element > 100);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
