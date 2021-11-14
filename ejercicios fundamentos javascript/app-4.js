/*

    Suma de 3 edades encontradas en frases

    - Este ejercicio consiste en sumas las edades de 3 usuarios, estos usuarios nos dan un texto y nuestro trabajo es obtener 
    las edades de ese texto y sumarlas.

*/

function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {
    //Pongo los valores dentro de un arreglo llamado words.
    let words = [
        firstUserPhrase,
        SecondUserPhrase,
        ThirdUserPhrase
    ];

    //Declaro un arreglo vacio para almacenar los filtros.
    let arrayResult = [];
    //Reclaro arreglo suma para la operacion matematica.
    let sum = 0;

    //Recorro el arreglo words para filtrar el numero de cada frase.
    words.map( word => {
        let space = word.indexOf(" ", + 21);
        let findNumber = word.slice(space, -5);

        //Almaceno los resultados en el arreglo arrayResult.
        arrayResult.push(parseInt(findNumber));
    });

    //Recorro el arreglo arrayResult para sumar los valor almacenados.
    for(let i = 0; i < arrayResult.length; i++) {
        sum += arrayResult[i];
    }

    return sum;
}