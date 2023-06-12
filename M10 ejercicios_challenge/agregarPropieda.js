/*
 * Completa la función 'agregaPropiedad' a continuación.
 *
 * La función debe retornar un ARREGLO DE OBJETOS.
 * La función recibe un ARREGLO DE OBJETOS 'amigos' y un STRING 'propiedad' como parámetros.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function agregaPropiedad(amigos, propiedad) {
    // tu código aquí
    return amigos.map(amigo => {
        if (!amigo.hasOwnProperty(propiedad)) {
            amigo[propiedad] = null;
        };
return amigo;
    })
 }
     
