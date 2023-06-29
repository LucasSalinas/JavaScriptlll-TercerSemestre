/*Clase 4:
Objetor en JS Parte 1:*/

//Tipos primitivos: No contienen propiedades, ni tampoco metodos.
let X = 10;
//console.log(x.length); //No funciona length, porque no existen atributos ni metodos asociados a los primitivos.

//Tipo objeto: pueden contener propiedades y metodos.
let persona = {
    nombre: "Lucas",
    apellido: "Salinas",
    email: "lukiñas@gmail.com",
    edad: 20,
    //Agregar metodos a los objetos:
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido; //Con "this" podemos acceder a los atributos del objeto.
    }
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

//Hacemos un objeto creandolo a traves de la clase padre "Object".
let persona2 = new Object();
persona2.nombre = "Daniel";
persona2.apellido = "Salinas";
persona2.telefono = "1345878664";
console.log(persona2.telefono);

//Diferentes formas de acceder a las propiedades de un objeto
//Llamando al atributo:
console.log(persona.apellido);

//Accedemos como si fuera una arreglo:
console.log(persona["apellido"]);

//Ciclo for para recorrer lar propiedades de un objeto (For in):
for(propiedad in persona){
    console.log(propiedad); //Nos muestra el nombre de las propiedades.
    console.log(persona[propiedad]); //Nos muestra el valor de las propiedades.
}

//Agregar, modificar o eliminar propiedades a los objetos:
//Agregar propiedades al objeto:
persona.sexo = "Hombre";

//Cambiamos dinamicanmente el valor de un objeto:
persona.nombre = "Ramon";
console.log(persona);

//Eliminar una propiedad del objeto:
delete persona.email; //Con la palabra reservada delete.
console.log(persona);