/*

    Suma los valores de un arreglo

    - ste ejercicio consiste en sumar los valores de un arreglo con 3 elementos.

*/

function arraySumValues(array) {
    //Declaro variable sum para almacenar la suma.
    let sum = 0;

    //Recorreo el arreglo pasado como parametro
    for(let i = 0; i < array.length; i++) {
        //Sumo con += los indices del arreglo pasado como parametro.
        sum += array[i];
    }

    //Retorno la suma.
    return sum;
}