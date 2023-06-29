/*Clase 6:
Clases en JS*/
//Las clases son una plantilla en la que podemos definir atributos y metodos para creacion de objetos.
//Las caracteristicas de una clase son el nombre, los atributos y los metodos.
//Cada objeto creado a partir de una clase tendra sus propios valores, a menos de que en la clase preasignemos algun valor.
//Para las clases no aplica el concepto de Hoisting, por lo tanto hay que definir una clase antes de usarla.

//Sintaxis basica para definir una clase:
class Persona { //Se recomienda que empiece el nombre con mayuscula.
    constructor(nombre, apellido){ //Este constructor es similar al que se puede crear fuera de una clase, para la creacion de objetos.
        this._nombre = nombre; //Guion bajo antes del nombre del atributo.
        this._apellido = apellido;
    }

    //Metodos get y set en clases:
    //El metodo get no puede llamarse igual que la propiedad: Lo recomendable es usar un guion bajo antes del nombre de la propiedad.
    get nombre(){
        return this._nombre;
    }

    //Metodo set con el que podremos modificar el atributo:
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Lucas", "Salinas"); //Creamos el objeto de la clase Persona.
console.log(persona1);
console.log(persona1.nombre); //Llamamos al metodo get.
persona1.nombre = "Ramon"; //Llamamos al metodo set y modificamos el nombre.
console.log(persona1.nombre);

let persona2 = new Persona("Daniel", "Salinas");
console.log(persona2);
console.log(persona2.nombre);
persona2.nombre = "Lucas";
console.log(persona2.nombre);

//Herencia en POO: Es una de las caracteristicas mas importantes de este tipo de programacion:
//Nos permitira heredar caracteristicas desde una clase padre a una clase hija.
//Para crear la clase hija, usamos la palabra reservada "extends" para que herede las caracteristicas de la clase padre:
class Empleado extends Persona {
    constructor(nombre, apellido, departamento){ //Debemos poner los atributos del constructor padre aqui.
        //Dentro del constructor de la clase hija, debemos llamar al constructor de la clase padre haciendo uso de la palabra reservada "super".
        super(nombre, apellido); //Aqui tambien indicamos los atributos del constructor.
        this._departamento = departamento;
    }

    get departamento(){
        return this_departamento;
    }

    set departamento(departamento){
        this_departamento = departamento;
    }
}

//Creamos un objeto de clase hija, ya podiendo acceder a los atributos y metodos heredados:
let empleado1 = new Empleado("Ana",  "Fernandez", "Sistemas");
console.log(empleado1);
