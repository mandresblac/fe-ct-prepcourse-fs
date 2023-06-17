/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:

   // Opcion 1 de respuesta - Clases
   // class Usuario {
   //    constructor(usuario, nombre, email, password) {
   //       this.usuario = usuario;
   //       this.nombre = nombre;
   //       this.email = email;
   //       this.password = password;
   //    }

   //    saludar() {
   //       return `Hola, mi nombre es ${this.nombre}`
   //    }
   // }

   // return Usuario;


   // Opcion 2 de respuesta - Función constructora
   function Usuario(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
   }

   Usuario.prototype.saludar = function() {
      return `Hola, mi nombre es ${this.nombre}`
   }

   // instanciamos un obeto o instancia de la clase Usuario
   const usuario = new Usuario ('Manuel', 'manuel123', 'micorrep@micorreo.com', '1234');
   console.log(usuario);

   return Usuario;
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function() {
      return "Hello World!";
   };
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".


   // Para invertir una cadena (String) utilizaremos 3 metodos de Javascript:
   // 1 - El método split() divide un string en un array de subcadenas, en función de un separador especificado. El método toma el separador como argumento y devuelve un array que contiene las subcadenas resultantes.
   // 2 - El método reverse() invierte un arreglo. El primer elemento del arreglo se convierte en el último y el último se convierte en el primero.
   // 3 - El método join() une o separa todos los elementos de un arreglo en una cadena.
   // Sitio web de consulta:  https://www.freecodecamp.org/espanol/news/tres-formas-de-invertir-una-cadena-en-javascript/

   // Opcion 1 de respuesta
   String.prototype.reverse = function() {
      return this.split("").reverse().join("");
   };
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
