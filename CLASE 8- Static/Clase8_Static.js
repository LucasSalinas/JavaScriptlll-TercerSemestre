/*
Laboratorio III Java Script: Clase 8
Lucas Salinas
Static
*/
class Persona{
    static contadorObjetos = 1; //atributo estatico
    contadorNoEstatico = 5;

    static get MAX_OBJ(){ //metodo estatico, simula una constante
        return 3
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.id = Persona.contadorObjetos;
        if (this.id <= Persona.MAX_OBJ) {
            this.id = Persona.contadorObjetos++;
        } else {
            this.id = undefined;
            console.log("llego al maximo de objetos")
        }
    }

    static metodoSaludar(persona){
        console.log(persona);
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    toString(){
        return this.id +" "+ this.nombreCompleto();
    }

}
class Emplado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + " " + this.departamento;
    }

}
let persona1 = new Persona("Lucas","Salinas");
console.log(persona1);
console.log(persona1.nombreCompleto())
console.log(persona1.toString())
let empleado1 = new Emplado("Jere","Riquero", "Desarrollo Web");
console.log(empleado1);
console.log(empleado1.nombreCompleto())
console.log(empleado1.toString()) 

//Solo se puede acceder a los metodos estaticos desde la clase:
Persona.metodoSaludar();
//Para acceder desde un objeto:
Persona.metodoSaludar(persona1.nombre);
//Accedemos desde objetos hijos:
Persona.metodoSaludar(empleado1.nombre);
console.log(Persona.contadorObjetos);

//Para acceder a un atributo no estatico, solo se desde los objetos, no desde la clase:
console.log(persona1.toString())
console.log(empleado1.toString())
let persona2 = new Persona("Abel","Pierna");
console.log(persona2.toString())
let persona3 = new Persona("Felipe","Correa")
console.log(persona3.toString())


