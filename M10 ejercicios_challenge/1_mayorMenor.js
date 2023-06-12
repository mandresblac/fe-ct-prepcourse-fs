/*
 * Completa la función 'mayorMenor' a continuación.
 *
 * La función debería retornar un ARREGLO DE ENTEROS.
 * La función acepta un ARREGLO DE ENTEROS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function mayorMenor(numeros) {
    // tu código aquí
    if (numeros.length === 0) {
        return [];
    } 
    let mayor = numeros[0];
    let menor = numeros[0];
    
        for (const num of numeros) {
            if (num > mayor) {
                mayor = num;
            }
            if (num < menor) {
                menor = num;
            }
        }
        return [mayor, menor];
    }


let numeros = [12, 23, 4, 7, 9, 8]
let res = mayorMenor(numeros)
console.log (res)