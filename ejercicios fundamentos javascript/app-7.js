/*

    Encuentra el número que se encuentra en la mitad de un arreglo

    - Este ejercicio consiste en recibir un arreglo de números y devolver el número que se encuentre en medio.

*/

function findMiddleNumber(array) {

    //Valido la cantidad de indice con .length y saco el multiplo
    if(array.length % 2 == 0) {
        //Si es par, retorno un arreglo con los numeros del medio
        return array.slice(2, - 2);
    }else {
        //Si es impar retorno el numero del medio.
        return parseInt(array.slice(3, - 2));
    }
}