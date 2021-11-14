/*
    Reemplaza la última palabra de una frase

    - Este ejercicio consiste en reemplazar la última palabra de una frase por otra palabra.

*/

function replaceLastWord(phrase, word) {
   //Declaro la variable donde quito los espacion con split y retorno un arreglo.
   let deleteSpaces = phrase.split(" ");

   //Elimino el ultimo indice del arreglo.
   deleteSpaces.pop();

   //Agrego la palabra al ultimo indice.
   deleteSpaces.push(word);

   //Retorno el valor y con join separo los elementos con un espacio
   return deleteSpaces.join(" ");
}