/*Clase 2:
Funciones en JS*/

//Importante: Las funciones declaradas independientemente de en que parte del programa sean creadas, pueden ser llamadas antes o despues de su creacion. Esto se conoce como el concepto "Hoisting". 
//Importante: Cuando le asignamos la referencia de la funcion a una variable, por lo general no modificaremos esa referencia, entonces usaremos "const."
//Para crear una funcion usaremos la palabra reservada "function" e indicaremos su nombre en Camel Case:

miFuncion(2, 2); //Se puede llamar antes.
function miFuncion(a, b){ //Una funcion puede o no tener parametros, que luego seran argumentos al ser llamada.
    console.log("Sumamos: " + (a + b));
}
miFuncion(5, 4); //Para llamar a la funcion y asignarle argumentos.

//Palabra reservada return: Nos sirve para retornar un valor cuando es necesario.
function miFuncion2(a, b){
    return a + b;
}
let resultado = miFuncion2(6, 7); //Podemos asignar valor a la variable con la funcion.
console.log(resultado);

//Funciones de tipo "expresion o anonimas": Cuando una funcion no tiene nombre y es usada para asignarle el valor a una variable por ejemplo.
//Buena practica: Como le asignamos dinamicamente la funcion a la variable, una buena practica es usar const en lugar de let.
//Importante: Las funciones expresadas o anonimas no aplican para el concepto de Hoisting.
let x = function(a, b){return a + b};
resultado2 = x(5, 6); //Al llamar a la funcion se indica la variable con sus argumentos entre parentesis.
console.log(resultado);

//Funciones de tipo "self e invoking": Tambien es una funcion anonima, con la particularidad de que puede llamarse a si misma, pero no se puede reutilizar.
(function(a, b){ //Se crea la funcion sin darle nombre, ni asignandola a ninguna variable.
    console.log("Ejecutando la funcion: "+ (a + b));
})(10, 5); //Le damos los argumentos.

//Uso de "Arguments":
function miFuncion3(a, b){
    console.log(arguments); //Con "arguments" podemos saber que argumentos tenemos en la funcion y sus valores.
    console.log(arguments.length) //Podemos usar el metodo length para saber el la cantidad de argumentos
}
miFuncion3(3, 7);

let sumar = function(a, b){
    console.log(arguments[0]); //En este caso "arguments" solo nos mostrara el valor del parametro de la posicion 0 de la funcion, es decir "a" en este caso. 
    console.log(arguments[1]);
    console.log(arguments[2]);
}
resultado = sumar(1, 4);

//Uso de toString: Retorna un valor en texto o cadena.
let miFuncionTexto = miFuncion3.toString(); //Devuelve el contenido de la funcion en forma de texto
console.log(miFuncionTexto);

//Funciones flecha: Cuando usamos este tipo de funciones, podemos omitir el uso de la palabra function, return y tampoco usamos llaves.
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(4, 4); //Debemos asignar el valor a una variable
console.log(resultado);

//Como sumar todos los numeros de una funcion:
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta); //Usando el concepto de hoisting, llamando antes de declarar.
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

//Paso por valor: Es cuando usamos tipos de valores que no sean objetos o arreglos, como por ej numeros, booleanos, etc.
//Al asignar un valor numerico a una variable, este valor es de tipo primitivo, porque no tiene ni propiedades, ni metodos, osea no podemos asociarlos.
//No podremos cambiar un valor primitivo a traves de un metodo:
let v = 10; //Valor primitivo.
function cambiarValor(a){
    a = 20; //Esta variable solo tiene efecto dentro de su estructura.
}
cambiarValor(v);
console.log(v); //Aqui solo se esta imprimiendo una copia del valor de "v", pero no se modifica su valor.

//Paso por referencia: A la funcion, arreglo o metodo le pasamos la referencia del espacio de memoria de un objeto, en vez de crear un nuevo espacio de memoria con el mismo valor.
//Para pasar un valor por referencia, debemos crear un objeto porque a estos si se le pueden asociar propiedades y metodos.
//Al crear un objeto es recomendable definir la variable con "const".
const persona = {
    nombre: "Juan",
    apellido: "Lepe"
}
console.log(persona);

//Si accedemos a los atributos del objeto "persona" a traves de la variable "p1", esta apuntara al espacio en memoria del objeto y de esa manera podra ser modificado el valor.
function cambiarValorObjeto(p1){
    p1.nombre = "Ignacio";
    p1.apellido = "Perez";
}
cambiarValorObjeto(persona);
console.log(persona);

/*Recordar:
- Los parametros de una funcion son los que se declaran entre los parentesis al crear la funcion.
- Los argumentos de una funcion son los valores que les asignamos a los parametros entre parentesis, cuando llamamos a la funcion.
- "Arguments" funciona como un arreglo, para deteminar una posicion.
- Las funciones flecha no funcionan con "hoisting", es decir en ese caso no podemos usar la funcion antes de declararla*/