/*
    Encuentra la palabra en la frase

    - Este ejercicio consiste en saber si una frase contiene o no una palabra en particular.

*/

function findWord(phrase, word) {
    //valide con el metodo includes si en la phrase exite la palabra almacenada en word.
    let result = phrase.includes(word);

    return result;
}
