
/*
 * Completa la función partir a continuación.
 *
 * La función debería retornar un ARREGLO DE ARREGLOS.
 * La función acepta un ARREGLO DE ENTEROS 'arreglo' y un ENTERO 'cantidad' como parámetros.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */


function partir(arreglo, cantidad) {
    // tu código aquí
    if (cantidad > arreglo.length){
        return [arreglo];
    }
    const arregloNuevo = [];
    let arregloDos = [];

    for (let i = 0; i < arreglo.length; i++) {
        let actu = arreglo[i];
        console.log(actu);
        if (arregloDos.length < cantidad) {
            arregloDos.push(actu);
        } else if (arregloDos.length === cantidad) {
            arregloNuevo.push(arregloDos);
            arregloDos = [actu];
            if (i === arreglo.length - 1) {
                arregloNuevo.push(arregloDos)
            }
        }
    }
    return arregloNuevo;
}