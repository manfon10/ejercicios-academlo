/*

    Suma todos los números pares en un rango
    
    - Este ejercicio consiste en sumar todos los números pares en un rango de 2 números (sin incluir a los 2 números).

*/

function sumEvens(start, end) {

    //Declaro variable sum para sumar los indices.
    let sum = 0;

    //Recorro los numeros para validar los pares y sumarlos
    for( let i = start + 1; i < end; i++) {
        if(i % 2 === 0) {
            sum += i;
        }

    }

    return sum;
}