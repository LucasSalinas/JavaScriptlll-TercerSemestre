/*Clase 1:
Ciclos en JS*/

//Ciclo While (Mientras): Evalua la condicion y luego ejecuta el codigo.
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador ++;
}
console.log("Fin del ciclo While");

//Ciclo do While (Hacer mientras): Ejecuta primero el codigo y luego evalua la condicion.
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
} while(conteo < 3);
console.log("Fin del ciclo Do While");

//Ciclo For (Para): Ya tiene definida la inicializacion, la condicion y el incremento o decremento del contador.
for(let contando = 0; contando < 3; contando++){
    console.log(contando);
}
console.log("Fin del ciclo For");

//Palabra reservada break: Destruye la estructura
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //Mostrara todos los numeros pares.
        break //Cuando encuentre el primer numero par, rompera el ciclo.
    }
}
console.log("Termina el ciclo For con Break");

//Palabra reservada continue: Prosigue con la siguiente iteracion.
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue; //Continuara a la siguiente iteracion.
    }
    console.log(contando); //Mostrara todos los numeros pares, saltandose la impresion de los impares, gracias a continue.
}
console.log("Termina el ciclo For con Continue");

//Etiquetas Labels: El uso de estas etiquetas permite ir a otra parte del programa. PD: No esta muy recomendado su uso.
//Por ej, su uso puede ser efectivo en ciclos anidados, ya que esta puede usarse como punto de referencia para destruir un bucle padre, desde un bucle anidado.
inicio: //Etiqueta label.
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        break inicio; //Rompera el buble for indicado cuando muestro el primer numero par.
    }
    console.log(contando); //Mostrara todos los numeros pares, saltandose la impresion de los impares, gracias a continue.
}
console.log("Termina el ciclo For con Continue");
