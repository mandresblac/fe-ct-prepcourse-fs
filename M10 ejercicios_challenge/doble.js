function doble(array) {
    //tu código acá
    let porDos = [];
    console.log(porDos);
    for (let i = 0; i < array.length; i++){ 
        // console.log(i);
        porDos.push(array[i]*2)
    }
    // console.log(porDos);
    return porDos
}
var numeros = [1, 2]
var resultado = doble(numeros)

console.log(resultado)