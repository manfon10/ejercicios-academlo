/*
    Encuentra la longitud de la última palabra en la frase frase

    - Este ejercicio consiste en saber obtener la el número total de letras que contiene la última palabra de una frase.

*/

function countLastWordLength(phrase) {
    //Valido el ultimo espacio en la phrasae
    let space = phrase.lastIndexOf(" ");

    //extraigo la ultima palabra de phrase
    let word = phrase.slice(space + 1);

    //retorno el resultado del total de letras de la palabra.
    return word.length;
}