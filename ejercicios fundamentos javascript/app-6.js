/*

    Crea un arreglo multiplos

    - Este ejercicio consiste en recibir 2 números y crear un arreglo con los los múltiplos del 
    primero siempre y cuando sean menores al segundo.

*/

function populateArray(number, limit) {

    //Reclaro el arreglo vacio.
    let arrayResult = [];

    //Recorro el valor i que empiece en 1 y sea menor o igual a limit.
    for(let i = 1; i <= limit; i++) {
        //Valido si i es multiplo de number
        if(i % number === 0) {
            //Si es multiplo, agrego los valores al arreglo con push.
            arrayResult.push(i);
        }
    }

    //Retorno el arreglo donde elimino el indice 0 con splice.
    return arrayResult.splice(1);
}