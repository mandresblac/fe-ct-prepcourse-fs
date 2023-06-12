// clase Alumno

class Alumno {
    constructor(nombre, apellido, cohorte, grupoDeAmigos, notasDeCheckpoints) {
        // Inicializar las propiedades del alumno con los valores recibidos como argumento
        // tu código aquí
        this.nombre = nombre;
        this.apellido = apellido;
        this.cohorte = cohorte;
        this.grupoDeAmigos = grupoDeAmigos;
        this.notasDeCheckpoints = notasDeCheckpoints
    }

    addAmigo(nombre, apellido) {
        // Agregar un objeto: { nombre: nombre, apellido: apellido }
        // al arreglo de amigos del alumno.
        // tu código aquí
        this.grupoDeAmigos.push({nombre, apellido})
    }

    countAmigos() {
        // Retorna la cantidad de amigos del alumno
        // tu código aquí
        return this.grupoDeAmigos.length;
    }

    addNota(nota) {
        // Agrega un nuevo elemento al arreglo de notas del alumno
        // tu código aquí
        this.notasDeCheckpoints.push(nota)
    }

    getNotas() {
        // tu código aquí
        return this.notasDeCheckpoints
    }

    presentacion() {
        // Retorna nombre, apellido y cohorte del alumno dentro del string 'Hola, soy ______ _____ del cohorte ____'
        // tu código aquí
        return "Hola, soy" + this.nombre + this.apellido + "del cohorte" + this.cohorte;
    }
}