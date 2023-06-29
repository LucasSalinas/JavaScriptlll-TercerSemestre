/*Clase 5:
Objetos en JS parte 2*/


//Aclaraciones acerca de get y set:
//Una forma de acceder al valor de las propiedades de un objeto es a traves de get (Conseguir):
let persona = {
    nombre: "Lucas",
    apellido: "Salinas",
    edad: "20",
    idioma: "es",
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    },
    get lang(){
        return this.idioma.toLocaleUpperCase(); //Llamaremos al metodo toLocalUpperCase que retornara transformando los caracteres a mayusculas.
    },
    set lang(lang){ //Usaremos un parametro llamado "Lang" para el idioma.
        this.idioma = lang.toLocaleUpperCase(); //Hacemos que la informacion se almacene sea en mayusculas.
    },
    get nombreEdad(){ //Get enlazara la propiedad del objeto a la funcion que luego llamaremos.
        return "Nombre: "+ this.nombre +", Edad: "+ this.edad;
    },
}
console.log(persona.nombreEdad);
console.log(persona.lang);

//Uso de set (Cambiar): Para modificar los valores de los atributos.
persona.lang = "en" //Gracias al Set mas toLocalUpperCase esta informacion nueva se guardo en mayusculas.

//Metodos constructores: Nos permitiran crear nuevos objeto a partir de la informacion preestablecida que le otorguemos a las propiedades del constructor.
//Dentro de este constructor tambien crearemos otro metodo:
function Persona2(nombre = "Ana", apellido, email){ //Recomendable comenzar el nombre de la funcion con mayuscula. Tambien podemos preasignar un valor al parametro, en este caso el nombre.
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){ //Creamos un metodo dentro del constructor.
        return this.nombre +" "+ this.apellido; //Concatenara el nombre y el apellido.
    }
}

//Ahora creamos nuevos objetos con los mismos atributos.
//Lo asignamos a traves de "new Persona2" otorgandole los argumentos que heredara el nuevo objeto.
let madre = new Persona2(this.nombre,"Fernandez", "anafdez@gmail.com");
console.log(madre);
console.log(madre.nombreCompleto());

let padre = new Persona2("Daniel", "Salinas", "danielsal@gmail.com"); //Si le damos un valor al parametro preasignado del constructor, al llamar al contructor, en este caso el nombre, se reemplazara por el valor que le demos.
console.log(padre);
console.log(padre.nombreCompleto());

//Existen sintaxis que simplifican la creacion de objetos y evitan el uso de la palabra reservada "new":
//Caso 1: Uso de new (Sintaxis formal).
let miObjeto = new Object();

//Caso 2: Opcion breve y recomendada.
let miObjeto2 = {};

//Caso 3: Caso String 1 (Sintaxis formal).
let miCadena = new String ("Hola");

//Caso 4: Caso String 2 (Forma simplificada y recomendada).
let miCadena2 = "Hola";

//Caso 5: Caso con numeros 1 (Sintaxis formal).
let miNumero = new Number(1);

//Caso 6: Caso con numeros 2 (Forma simple y recomendable).
let miNumero2 = 1;

//Caso 7: Caso booleano 1 (Sintaxis formal).
let miBooleano = new Boolean(false);

//Caso 8: Caso booleano 2 (Opcion breve y recomendada).
let miBooleano2 = false;

//Caso 9: Caso arreglos 1 (Opcion formal).
let miArreglo = new Array();

//Caso 10: Caso arreglos 2 (Sintaxis simple y recomendable).
let miArreglo2 = [];

//Caso 11: Caso function 1 (De manera formal).
let miFuncion = new function(){};

//Caso 12: Caso function 2 (Sintaxis simple y recomendada).
let miFuncion2 = function(){};

//Uso de Prototype: Nos permite agregar atributos a todos los objetos creados a traves de un constructor
Persona2.prototype.telefono = "2617987436"; //Se ha agregado la propiedad telefono con su valor.
console.log(padre.telefono);
console.log(madre.telefono)

//Uso de Call: Este metodo nos permitira llamar a un metodo que esta definido en un objeto desde otro objeto en el que no este definido.
let persona3 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto2: function(titulo, telefono){
        return titulo +": "+ this.nombre +" "+ this.apellido +" Cel: "+ telefono;
    }
}

let persona4 = {
    nombre: "Carlos",
    apellido: "Lara",
}
console.log(persona3.nombreCompleto2("Lic.", "2784958463"));
//Ahora si usaremos call usando la siguiente sintaxis e indicando los argumentos de la siguiente manera:
console.log(persona3.nombreCompleto2.call(persona4, "Ing. ", "2784356472")); //Con call, solo debemos pasar los valores separados con coma.

//Uso de Apply: De manera similar que call, este metodo nos permite llamar a un metodo en un objeto que no tiene definido cierto metodo.
//La diferencia con Call es que apply necesita que le pasemos los valores de los argumentos en un arreglo que contenga esos valores.
let arreglo = ["Ing. ", "2784356472"];
console.log(persona3.nombreCompleto2.apply(persona4, arreglo));