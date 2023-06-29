/*Clase 2: 
Arreglos en JS*/

//Los arreglos son un tipo object que permite almacenar gran cantidad de datos.
//Sintaxis vieja para declarar arreglos (No recomendada):
//let autos = new Array("Ferrari", "Renault", "BMW");

//Sintaxis actual: Usando los corchetes.
const autos = ["Ferrari", "Renault", "BMW"];
console.log(autos);

//Recorremos los elementos de un arreglo:
console.log(autos[0]);
for(let i = 0; i < autos.length; i++){ //Length es un metodo que nos permite mostrar la posicion del elemento en el array.
    console.log(i+ ": "+ autos[i]); //Mostramos el elemento en el array en la posicion otorgada por el iterador.
}

//Modificar los elementos del arreglo:
autos[1] = "Volvo";
console.log(autos[1]);

//Agregar valores al array:
autos.push("Audi"); //El metodo push nos permite agregar un elemento al final del arreglo.
console.log(autos);

//Otras formas de agregar elementos al arreglo:
autos[autos.length] = "Porche"; //Usando autos.length dentro de la posicion del arreglo, tambien le indicamos que agregue el elemento al final.
console.log(autos);

//Tercera forma:
autos[5] = "Renault"; //Indicandole la proxima posicion a la ultima del arreglo, en este caso 5.
console.log(autos);

//Como preguntar si es un array o un arreglo:
//A traves de la clase "Array", podemos acceder al metodo "isArray"
console.log(Array.isArray(autos)); //Indicandole el elemento "autos", evaluara si es un arreglo o no y nos devolvera un resultado booleano.

//Otra forma es preguntando si el elemento es una instancia de la clase Array
console.log(autos instanceof Array) //Usando instanceof