/*
 * Completa la función cuentaPorFavor a continuación.
 *
 * La función debería retornar un ENTERO.
 * La función acepta un ARREGLO DE OBJETOS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function cuentaPorFavor(orden) {
    // tu código aquí
    let cuenta = orden.reduce((valorUno, valorDos) =>
        valorUno + valorDos.cantidad * valorDos.precio, 0);
    
    return cuenta 
}
